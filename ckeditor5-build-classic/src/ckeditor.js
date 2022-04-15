/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
//import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';

import Font from '@ckeditor/ckeditor5-font/src/font';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import LinkImageEditing from '@ckeditor/ckeditor5-link/src/linkimageediting';
import { ImageEditing } from '@ckeditor/ckeditor5-image';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import MathType from '@wiris/mathtype-ckeditor5';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SelectAll from '@ckeditor/ckeditor5-select-all/src/selectall';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
var IFRAME_SRC = '//cdn.iframe.ly/api/iframe';
var API_KEY = '1fa8dfb21c8103b4e9578e'; 

export default class ClassicEditor extends ClassicEditorBase {}

function SpecialCharactersEmoji( editor ) {
    editor.plugins.get( 'SpecialCharacters' ).addItems( 'Emoji', [
        { title: 'smiley face', character: '😊' },
        { title: 'rocket', character: '🚀' },
        { title: 'wind blowing face', character: '🌬️' },
        { title: 'floppy disk', character: '💾' },
        { title: 'heart', character: '❤️' }
    ] );
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	CloudServices,
	//EasyImage,
	Heading,
	Image,
	ImageToolbar,
	ImageCaption,
	ImageStyle,
	ImageResize,
	LinkImage,
	LinkImageEditing,
	ImageEditing,
	ImageInsert,
	ImageUpload,
	Base64UploadAdapter,
	Indent,
	Link,
	List,
	TodoList,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TableProperties, 
	TableCellProperties, 
	TextTransformation,
	HorizontalLine,
	Font,
	Alignment,
	Highlight,
	MathType,
	CodeBlock,
	IndentBlock,
	AutoImage,
	HtmlEmbed,
	Clipboard,
	FindAndReplace,
	RemoveFormat,
	SelectAll,
	SourceEditing,
	SpecialCharacters, 
	SpecialCharactersEssentials,
	SpecialCharactersEmoji,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			//'uploadImage',
			'insertImage',
			'blockQuote',
			'insertTable',
			'todoList',
			'mediaEmbed',
			'undo',
			'redo',
			'alignment',
			'horizontalLine',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'highlight',
			'codeblock',
			'htmlEmbed',
			'MathType', 
			'ChemType',
			'findAndReplace',
			'removeFormat',
			'selectAll',
			'sourceEditing',
			'specialCharacters',
		]
	},
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'linkImage',
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties', 
			'tableCellProperties',
		]
	},
	mediaEmbed: {
        // Previews are always enabled if there’s a provider for a URL (below regex catches all URLs)
            // By default `previewsInData` are disabled, but let’s set it to `false` explicitely to be sure
            previewsInData: false,

            providers: [
                {
                    // hint: this is just for previews. Get actual HTML codes by making API calls from your CMS
                    name: 'iframely previews', 

                    // Match all URLs or just the ones you need:
                    url: /.+/,

                    html: match => {
                        const url = match[ 0 ];
                        
                        var iframeUrl = IFRAME_SRC + '?app=1&api_key=' + API_KEY + '&url=' + encodeURIComponent(url);
                        // alternatively, use &key= instead of &api_key with the MD5 hash of your api_key
                        // more about it: https://iframely.com/docs/allow-origins

                        return (
                            // If you need, set maxwidth and other styles for 'iframely-embed' class - it's yours to customize
                            '<div class="iframely-embed">' +
                                '<div class="iframely-responsive">' +
                                    `<iframe src="${ iframeUrl }" ` +
                                        'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>' +
                                    '</iframe>' +
                                '</div>' +
                            '</div>'
                        );
                    }
                }
            ]
    },
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
	additionalLanguages: 'all',
};
