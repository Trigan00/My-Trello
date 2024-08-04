// @ts-ignore
import CodeTool from '@editorjs/code'
// @ts-ignore
import Quote from '@editorjs/quote'
import Header from '@editorjs/header'
// @ts-ignore
import Paragraph from '@editorjs/paragraph'
// @ts-ignore
import Checklist from '@editorjs/checklist'
// @ts-ignore
import Embed from '@editorjs/embed'
import InlineCode from '@editorjs/inline-code'
import List from '@editorjs/list'
// @ts-ignore
import SimpleImage from '@editorjs/simple-image'
import ImageTool from '@editorjs/image'
// @ts-ignore
import Delimiter from '@editorjs/delimiter'
// @ts-ignore
import Table from '@editorjs/table'
// @ts-ignore
import Warning from '@editorjs/warning'
import { I18nDictionary } from '@editorjs/editorjs'

export const EDITOR_TOOLS = {
	code: CodeTool,
	image: {
		class: ImageTool,
		config: {
			endpoints: {
				byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
				byUrl: 'http://localhost:8008/fetchUrl' // Your endpoint that provides uploading by Url
			}
		}
	},
	table: {
		class: Table,
		inlineToolbar: true,
		config: {
			rows: 2,
			cols: 3
		}
	},
	warning: {
		class: Warning,
		inlineToolbar: true,
		config: {
			titlePlaceholder: 'Название',
			messagePlaceholder: 'Сообщение'
		}
	},
	delimiter: Delimiter,
	header: {
		class: Header,
		config: {
			placeholder: 'Enter a Header',
			levels: [2, 3, 4],
			defaultLevel: 2
		},
		inlineToolbar: true
	},
	paragraph: {
		class: Paragraph,
		inlineToolbar: true
	},
	checklist: {
		class: Checklist,
		inlineToolbar: true
	},
	embed: {
		class: Embed,
		inlineToolbar: true
	},
	inlineCode: {
		class: InlineCode,
		inlineToolbar: true
	},
	list: {
		class: List,
		inlineToolbar: true
	},
	quote: {
		class: Quote,
		inlineToolbar: true
	}
}

export const i18nConfig = {
	/**
	 * @type {I18nDictionary}
	 */
	messages: {
		/**
		 * Other below: translation of different UI components of the editor.js core
		 */
		ui: {
			blockTunes: {
				toggler: {
					'Click to tune': 'Нажмите, чтобы настроить',
					'or drag to move': 'или перетащите'
				}
			},
			inlineToolbar: {
				converter: {
					'Convert to': 'Конвертировать в'
				}
			},
			toolbar: {
				toolbox: {
					Add: 'Добавить'
				}
			}
		},

		/**
		 * Section for translation Tool Names: both block and inline tools
		 */
		toolNames: {
			Text: 'Параграф',
			Heading: 'Заголовок',
			List: 'Список',
			Warning: 'Примечание',
			Checklist: 'Чеклист',
			Quote: 'Цитата',
			Code: 'Код',
			Delimiter: 'Разделитель',
			'Raw HTML': 'HTML-фрагмент',
			Table: 'Таблица',
			Link: 'Ссылка',
			Marker: 'Маркер',
			Bold: 'Полужирный',
			Italic: 'Курсив',
			InlineCode: 'Моноширинный'
		},

		/**
		 * Section for passing translations to the external tools classes
		 */
		tools: {
			/**
			 * Each subsection is the i18n dictionary that will be passed to the corresponded plugin
			 * The name of a plugin should be equal the name you specify in the 'tool' section for that plugin
			 */
			warning: {
				// <-- 'Warning' tool will accept this dictionary section
				Title: 'Название',
				Message: 'Сообщение'
			},

			/**
			 * Link is the internal Inline Tool
			 */
			link: {
				'Add a link': 'Вставьте ссылку'
			},
			/**
			 * The "stub" is an internal block tool, used to fit blocks that does not have the corresponded plugin
			 */
			stub: {
				'The block can not be displayed correctly.':
					'Блок не может быть отображен'
			}
		},

		/**
		 * Section allows to translate Block Tunes
		 */
		blockTunes: {
			/**
			 * Each subsection is the i18n dictionary that will be passed to the corresponded Block Tune plugin
			 * The name of a plugin should be equal the name you specify in the 'tunes' section for that plugin
			 *
			 * Also, there are few internal block tunes: "delete", "moveUp" and "moveDown"
			 */
			delete: {
				Delete: 'Удалить'
			},
			moveUp: {
				'Move up': 'Переместить вверх'
			},
			moveDown: {
				'Move down': 'Переместить вниз'
			}
		}
	}
}
