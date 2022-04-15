import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getCategories } from '../../actions/category';
import { getTags } from '../../actions/tag';
import { createBlog } from '../../actions/blog';
//import { CKEditor } from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor';
//const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
//import '../../node_modules/react-quill/dist/quill.snow.css';
//import { QuillModules, QuillFormats } from '../../helpers/quill';

const CreateBlog = ({ router }) => {
    const editorRef = useRef();
    const editorEl = useRef(null);
    const [ editorLoaded, setEditorLoaded ] = useState( false );
    const { CKEditor, ClassicEditor} = editorRef.current || {};

    useEffect( () => {
        editorRef.current = {
          CKEditor: require( '@ckeditor/ckeditor5-react' ).CKEditor, //Added .CKEditor
          ClassicEditor: require( '@ckeditor/ckeditor5-build-classic/build/ckeditor' ),
        }
        setEditorLoaded( true )
    }, [] );
    const blogFromLS = () => {
        if (typeof window === 'undefined') {
            return false;
        }

        if (localStorage.getItem('blog')) {
            return JSON.parse(localStorage.getItem('blog'));
        } else {
            return false;
        }
    };

    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    const [checked, setChecked] = useState([]); // categories
    const [checkedTag, setCheckedTag] = useState([]); // tags

    const [body, setBody] = useState(blogFromLS());
    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        formData: '',
        title: '',
        hidePublishButton: false
    });

    const { error, sizeError, success, formData, title, hidePublishButton } = values;
    const token = getCookie('token');

    useEffect(() => {
        setValues({ ...values, formData: new FormData() });
        initCategories();
        initTags();
    }, [router]);

    const initCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setCategories(data);
            }
        });
    };

    const initTags = () => {
        getTags().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setTags(data);
            }
        });
    };

    const publishBlog = e => {
        e.preventDefault();
        // console.log('ready to publishBlog');
        createBlog(formData, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setTimeout(() => {console.log("wait...")}, 18000);
                setValues({ ...values, title: '', error: '', success: `A new blog titled "${data.title}" is created` });
                setTimeout(() => {console.log("wait...")}, 18000);
                setBody('');
                setCategories([]);
                setTags([]);
            }
        });
    };

    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value, formData, error: '' });
    };

    //const handleBody = e => {
    //console.log(e);
    //  setBody(e);
    //formData.set('body', e);
    //    if (typeof window !== 'undefined') {
    //        localStorage.setItem('blog', JSON.stringify(e));
    //    }
    //};

    const handleToggle = c => () => {
        setValues({ ...values, error: '' });
        // return the first index or -1
        const clickedCategory = checked.indexOf(c);
        const all = [...checked];

        if (clickedCategory === -1) {
            all.push(c);
        } else {
            all.splice(clickedCategory, 1);
        }
        console.log(all);
        setChecked(all);
        formData.set('categories', all);
    };

    const handleTagsToggle = t => () => {
        setValues({ ...values, error: '' });
        // return the first index or -1
        const clickedTag = checkedTag.indexOf(t);
        const all = [...checkedTag];

        if (clickedTag === -1) {
            all.push(t);
        } else {
            all.splice(clickedTag, 1);
        }
        console.log(all);
        setCheckedTag(all);
        formData.set('tags', all);
    };

    const showCategories = () => {
        return (
            categories &&
            categories.map((c, i) => (
                <li key={i} className="list-unstyled">
                    <input onChange={handleToggle(c._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">{c.name}</label>
                </li>
            ))
        );
    };

    const showTags = () => {
        return (
            tags &&
            tags.map((t, i) => (
                <li key={i} className="list-unstyled">
                    <input onChange={handleTagsToggle(t._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">{t.name}</label>
                </li>
            ))
        );
    };

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            {success}
        </div>
    );

    const createBlogForm = () => {
    
        setTimeout(() => {console.log("wait...")}, 18000);
   //const [data, setData] = useState('');
        
        return (
           <>
            <form onSubmit={publishBlog}>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input type="text" className="form-control" value={title} onChange={handleChange('title')} />
                </div>

                
                <div className="form-group">
                <link rel="stylesheet" href="/static/css/styles.css"/>
                <script async charSet="utf-8" src="//cdn.iframe.ly/embed.js?api_key={1fa8dfb21c8103b4e9578e}"> </script>
                  {editorLoaded ? <CKEditor
                  editor={ ClassicEditor }
                  data={body}
                  //previewsInData = {true}
                  onReady={ editor => {
                  // You can store the "editor" and use when it is needed.
                  setTimeout(() => {console.log("wait...")}, 18000);
                  console.log('Editor is ready to use!', editor);           
                  } }
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setTimeout(() => {console.log("wait...")}, 18000);
                    //setContent(data)
                    setBody(data);
                    setTimeout(() => {console.log("wait...")}, 18000);
                    formData.set('body', data);
                    setTimeout(() => {console.log("wait...")}, 18000);
                    if (typeof window !== 'undefined') {
                    localStorage.setItem('blog', JSON.stringify(data));
                    setTimeout(() => {console.log("wait...")}, 18000);
                    }
                  }}
                  onBlur={ (event, editor ) => {
                    setTimeout(() => {console.log("wait...")}, 18000);
                    console.log( 'Blur.', editor );
                  }}
                  onFocus={ ( event, editor ) => {
                    setTimeout(() => {console.log("wait...")}, 18000);
                    console.log( 'Focus.', editor );
                  }}
                  ref={editorEl}
                /> : <p>Carregando...</p>}
               
                </div>
           
                <div>
                    <button type="submit" className="btn btn-primary">
                        Publish
                    </button>
                </div>
            </form>
            </>
        );
    };

    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <div className="col-md-8">
                    {createBlogForm()}
                    <div className="pt-3">
                        {showError()}
                        {showSuccess()}
                    </div>
                </div>

                <div className="col-md-4">
                    <div>
                        <div className="form-group pb-2">
                            <h5>Featured image</h5>
                            <hr />

                            <small className="text-muted">Max size: 1mb</small>
                            <label className="btn btn-outline-info">
                                Upload featured image
                                <input onChange={handleChange('photo')} type="file" accept="image/*" hidden />
                            </label>
                        </div>
                    </div>
                    <div>
                        <h5>Categories</h5>
                        <hr />

                        <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showCategories()}</ul>
                    </div>
                    <div>
                        <h5>Tags</h5>
                        <hr />
                        <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showTags()}</ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(CreateBlog);
