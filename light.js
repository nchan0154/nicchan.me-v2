// https://themes.vscode.one/edit/hce3peR3

export default {
	name: "blog light",
	type: "light",
	semanticHighlighting: true,
	semanticTokenColors: {
		enumMember: {
			foreground: "#1f7d89",
		},
		"variable.constant": {
			foreground: "#1f7d89",
		},
		"variable.defaultLibrary": {
			foreground: "#a75293",
		},
	},
	tokenColors: [
		{
			name: "unison punctuation",
			scope:
				"punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "haskell variable generic-type",
			scope: "variable.other.generic-type.haskell",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "haskell storage type",
			scope: "storage.type.haskell",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "support.variable.magic.python",
			scope: "support.variable.magic.python",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "punctuation.separator.parameters.python",
			scope:
				"punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "variable.parameter.function.language.special.self.python",
			scope: "variable.parameter.function.language.special.self.python",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "storage.modifier.lifetime.rust",
			scope: "storage.modifier.lifetime.rust",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "support.function.std.rust",
			scope: "support.function.std.rust",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "entity.name.lifetime.rust",
			scope: "entity.name.lifetime.rust",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "variable.language.rust",
			scope: "variable.language.rust",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "support.constant.edge",
			scope: "support.constant.edge",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "regexp constant character-class",
			scope: "constant.other.character-class.regexp",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "regexp operator.quantifier",
			scope: "keyword.operator.quantifier.regexp",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "punctuation.definition",
			scope:
				"punctuation.definition.string.begin,punctuation.definition.string.end",
			settings: {
				foreground: "#5f4c65",
			},
		},
		{
			name: "Text",
			scope: "variable.parameter.function",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "Comment Markup Link",
			scope: "comment markup.link",
			settings: {
				foreground: "#6a6aa4",
			},
		},
		{
			name: "markup diff",
			scope: "markup.changed.diff",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "diff",
			scope:
				"meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "inserted.diff",
			scope: "markup.inserted.diff",
			settings: {
				foreground: "#5f4c65",
			},
		},
		{
			name: "deleted.diff",
			scope: "markup.deleted.diff",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "c++ function",
			scope: "meta.function.c,meta.function.cpp",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "c++ block",
			scope:
				"punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "js/ts punctuation separator key-value",
			scope: "punctuation.separator.key-value",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "js/ts import keyword",
			scope: "keyword.operator.expression.import",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "math js/ts",
			scope: "support.constant.math",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "math property js/ts",
			scope: "support.constant.property.math",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "js/ts variable.other.constant",
			scope: "variable.other.constant",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "java type",
			scope: ["storage.type.annotation.java", "storage.type.object.array.java"],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "java source",
			scope: "source.java",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "java modifier.import",
			scope:
				"punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "java modifier.import",
			scope: "meta.method.java",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "java modifier.import",
			scope:
				"storage.modifier.import.java,storage.type.java,storage.type.generic.java",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "java instanceof",
			scope: "keyword.operator.instanceof.java",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "java variable.name",
			scope: "meta.definition.variable.name.java",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "operator logical",
			scope: "keyword.operator.logical",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "operator bitwise",
			scope: "keyword.operator.bitwise",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "operator channel",
			scope: "keyword.operator.channel",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "support.constant.property-value.scss",
			scope:
				"support.constant.property-value.scss,support.constant.property-value.css",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "CSS/SCSS/LESS Operators",
			scope: "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "css color standard name",
			scope:
				"support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "css comma",
			scope: "punctuation.separator.list.comma.css",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "css attribute-name.id",
			scope: "support.constant.color.w3c-standard-color-name.css",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "css property-name",
			scope: "support.type.vendored.property-name.css",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "js/ts module",
			scope:
				"support.module.node,support.type.object.module,support.module.node",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "entity.name.type.module",
			scope: "entity.name.type.module",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "js variable readwrite",
			scope:
				"variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "js/ts json",
			scope: "support.constant.json",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "js/ts Keyword",
			scope: [
				"keyword.operator.expression.instanceof",
				"keyword.operator.new",
				"keyword.operator.ternary",
				"keyword.operator.optional",
				"keyword.operator.expression.keyof",
			],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "js/ts console",
			scope: "support.type.object.console",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "js/ts support.variable.property.process",
			scope: "support.variable.property.process",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "js console function",
			scope: "entity.name.function,support.function.console",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "keyword.operator.misc.rust",
			scope: "keyword.operator.misc.rust",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "keyword.operator.sigil.rust",
			scope: "keyword.operator.sigil.rust",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "operator",
			scope: "keyword.operator.delete",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "js dom",
			scope: "support.type.object.dom",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "js dom variable",
			scope: "support.variable.dom,support.variable.property.dom",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "keyword.operator",
			scope:
				"keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "C operator assignment",
			scope:
				"keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Punctuation",
			scope: "punctuation.separator.delimiter",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "Other punctuation .c",
			scope: "punctuation.separator.c,punctuation.separator.cpp",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "C type posix-reserved",
			scope: "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "keyword.operator.sizeof.c",
			scope: "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "python parameter",
			scope: "variable.parameter.function.language.python",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "python type",
			scope: "support.type.python",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "python logical",
			scope: "keyword.operator.logical.python",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "pyCs",
			scope: "variable.parameter.function.python",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "python block",
			scope:
				"punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "python function-call.generic",
			scope: "meta.function-call.generic.python",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "python placeholder reset to normal string",
			scope: "constant.character.format.placeholder.other.python",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Operators",
			scope: "keyword.operator",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "Compound Assignment Operators",
			scope: "keyword.operator.assignment.compound",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Compound Assignment Operators js/ts",
			scope:
				"keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Keywords",
			scope: "keyword",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Namespaces",
			scope: "entity.name.namespace",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Variables",
			scope: "variable",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "Variables",
			scope: "variable.c",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "Language variables",
			scope: "variable.language",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Java Variables",
			scope: "token.variable.parameter.java",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "Java Imports",
			scope: "import.storage.java",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Packages",
			scope: "token.package.keyword",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Packages",
			scope: "token.package",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "Functions",
			scope: [
				"entity.name.function",
				"meta.require",
				"support.function.any-method",
				"variable.function",
			],
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Classes",
			scope: "entity.name.type.namespace",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Classes",
			scope: "support.class, entity.name.type.class",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Class name",
			scope: "entity.name.class.identifier.namespace.type",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Class name",
			scope: [
				"entity.name.class",
				"variable.other.class.js",
				"variable.other.class.ts",
			],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Class name php",
			scope: "variable.other.class.php",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "Type Name",
			scope: "entity.name.type",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Keyword Control",
			scope: "keyword.control",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Control Elements",
			scope: "control.elements, keyword.operator.less",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Methods",
			scope: "keyword.other.special-method",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Storage",
			scope: "storage",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Storage JS TS",
			scope: "token.storage",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
			scope:
				"keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Java Storage",
			scope: "token.storage.type.java",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Support",
			scope: "support.function",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Support type",
			scope: "support.type.property-name",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "Support type",
			scope: "support.constant.property-value",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "Support type",
			scope: "support.constant.font-name",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Meta tag",
			scope: "meta.tag",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "Strings",
			scope: "string",
			settings: {
				foreground: "#5f4c65",
			},
		},
		{
			name: "Inherited Class",
			scope: "entity.other.inherited-class",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Constant other symbol",
			scope: "constant.other.symbol",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Integers",
			scope: "constant.numeric",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Constants",
			scope: "constant",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Constants",
			scope: "punctuation.definition.constant",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Tags",
			scope: "entity.name.tag",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "Attributes",
			scope: "entity.other.attribute-name",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Attribute IDs",
			scope: "entity.other.attribute-name.id",
			settings: {
				fontStyle: "normal",
				foreground: "#1f7d89",
			},
		},
		{
			name: "Attribute class",
			scope: "entity.other.attribute-name.class.css",
			settings: {
				fontStyle: "normal",
				foreground: "#1f7d89",
			},
		},
		{
			name: "Selector",
			scope: "meta.selector",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Headings",
			scope: "markup.heading",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "Headings",
			scope:
				"markup.heading punctuation.definition.heading, entity.name.section",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Units",
			scope: "keyword.other.unit",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "Bold",
			scope: "markup.bold,todo.bold",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Bold",
			scope: "punctuation.definition.bold",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "markup Italic",
			scope: "markup.italic, punctuation.definition.italic,todo.emphasis",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "emphasis md",
			scope: "emphasis md",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown headings",
			scope: "entity.name.section.markdown",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
			scope: "punctuation.definition.heading.markdown",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "punctuation.definition.list.begin.markdown",
			scope: "punctuation.definition.list.begin.markdown",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown heading setext",
			scope: "markup.heading.setext",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
			scope: "punctuation.definition.bold.markdown",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown Inline Raw",
			scope: "markup.inline.raw.markdown",
			settings: {
				foreground: "#5f4c65",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown Inline Raw",
			scope: "markup.inline.raw.string.markdown",
			settings: {
				foreground: "#5f4c65",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
			scope: "punctuation.definition.list.markdown",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
			scope: [
				"punctuation.definition.string.begin.markdown",
				"punctuation.definition.string.end.markdown",
				"punctuation.definition.metadata.markdown",
			],
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "beginning.punctuation.definition.list.markdown",
			scope: ["beginning.punctuation.definition.list.markdown"],
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
			scope: "punctuation.definition.metadata.markdown",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown Underline Link/Image",
			scope:
				"markup.underline.link.markdown,markup.underline.link.image.markdown",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown Link Title/Description",
			scope:
				"string.other.link.title.markdown,string.other.link.description.markdown",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Regular Expressions",
			scope: "string.regexp",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Escape Characters",
			scope: "constant.character.escape",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Embedded",
			scope: "punctuation.section.embedded, variable.interpolation",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "Embedded",
			scope:
				"punctuation.section.embedded.begin,punctuation.section.embedded.end",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "illegal",
			scope: "invalid.illegal",
			settings: {
				foreground: "#ffffff",
			},
		},
		{
			name: "illegal",
			scope: "invalid.illegal.bad-ampersand.html",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "Broken",
			scope: "invalid.broken",
			settings: {
				foreground: "#ffffff",
			},
		},
		{
			name: "Deprecated",
			scope: "invalid.deprecated",
			settings: {
				foreground: "#ffffff",
			},
		},
		{
			name: "Unimplemented",
			scope: "invalid.unimplemented",
			settings: {
				foreground: "#ffffff",
			},
		},
		{
			name: "Source Json Meta Structure Dictionary Json > String Quoted Json",
			scope: "source.json meta.structure.dictionary.json > string.quoted.json",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
			scope:
				"source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
			scope:
				"source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
			settings: {
				foreground: "#5f4c65",
			},
		},
		{
			name: "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
			scope:
				"source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "[VSCODE-CUSTOM] JSON Property Name",
			scope: "support.type.property-name.json",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
			scope: "support.type.property-name.json punctuation",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "laravel blade tag",
			scope:
				"text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "laravel blade @",
			scope:
				"text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "use statement for other classes",
			scope:
				"support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "error suppression",
			scope: "keyword.operator.error-control.php",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "php instanceof",
			scope: "keyword.operator.type.php",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "style double quoted array index normal begin",
			scope: "punctuation.section.array.begin.php",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "style double quoted array index normal end",
			scope: "punctuation.section.array.end.php",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "php illegal.non-null-typehinted",
			scope: "invalid.illegal.non-null-typehinted.php",
			settings: {
				foreground: "#f44747",
			},
		},
		{
			name: "php types",
			scope:
				"storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "php call-function",
			scope:
				"meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "php function-resets",
			scope:
				"punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "support php constants",
			scope: "support.constant.core.rust",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "support php constants",
			scope:
				"support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "php goto",
			scope: "entity.name.goto-label.php,support.other.php",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "php logical/bitwise operator",
			scope:
				"keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "php regexp operator",
			scope: "keyword.operator.regexp.php",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "php comparison",
			scope: "keyword.operator.comparison.php",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "php heredoc/nowdoc",
			scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "python function decorator @",
			scope: "meta.function.decorator.python",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "python function support",
			scope:
				"support.token.decorator.python,meta.function.decorator.identifier.python",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "parameter function js/ts",
			scope: "function.parameter",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "brace function",
			scope: "function.brace",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "parameter function ruby cs",
			scope: "function.parameter.ruby, function.parameter.cs",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "constant.language.symbol.ruby",
			scope: "constant.language.symbol.ruby",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "rgb-value",
			scope: "rgb-value",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "rgb value",
			scope: "inline-color-decoration rgb-value",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "rgb value less",
			scope: "less rgb-value",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "sass selector",
			scope: "selector.sass",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "ts primitive/builtin types",
			scope:
				"support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "block scope",
			scope: "block.scope.end,block.scope.begin",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "cs storage type",
			scope: "storage.type.cs",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "cs local variable",
			scope: "entity.name.variable.local.cs",
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			scope: "token.info-token",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			scope: "token.warn-token",
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			scope: "token.error-token",
			settings: {
				foreground: "#f44747",
			},
		},
		{
			scope: "token.debug-token",
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "String interpolation",
			scope: [
				"punctuation.definition.template-expression.begin",
				"punctuation.definition.template-expression.end",
				"punctuation.section.embedded",
			],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Reset JavaScript string interpolation expression",
			scope: ["meta.template.expression"],
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "Import module JS",
			scope: ["keyword.operator.module"],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "js Flowtype",
			scope: ["support.type.type.flowtype"],
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "js Flow",
			scope: ["support.type.primitive"],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "js class prop",
			scope: ["meta.property.object"],
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "js func parameter",
			scope: ["variable.parameter.function.js"],
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "js template literals begin",
			scope: ["keyword.other.template.begin"],
			settings: {
				foreground: "#5f4c65",
			},
		},
		{
			name: "js template literals end",
			scope: ["keyword.other.template.end"],
			settings: {
				foreground: "#5f4c65",
			},
		},
		{
			name: "js template literals variable braces begin",
			scope: ["keyword.other.substitution.begin"],
			settings: {
				foreground: "#5f4c65",
			},
		},
		{
			name: "js template literals variable braces end",
			scope: ["keyword.other.substitution.end"],
			settings: {
				foreground: "#5f4c65",
			},
		},
		{
			name: "js operator.assignment",
			scope: ["keyword.operator.assignment"],
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "go operator",
			scope: ["keyword.operator.assignment.go"],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "go operator",
			scope: ["keyword.operator.arithmetic.go", "keyword.operator.address.go"],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Go package name",
			scope: ["entity.name.package.go"],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "elm prelude",
			scope: ["support.type.prelude.elm"],
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "elm constant",
			scope: ["support.constant.elm"],
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "template literal",
			scope: ["punctuation.quasi.element"],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "html/pug (jade) escaped characters and entities",
			scope: ["constant.character.entity"],
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
			scope: [
				"entity.other.attribute-name.pseudo-element",
				"entity.other.attribute-name.pseudo-class",
			],
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Clojure globals",
			scope: ["entity.global.clojure"],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Clojure symbols",
			scope: ["meta.symbol.clojure"],
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "Clojure constants",
			scope: ["constant.keyword.clojure"],
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "CoffeeScript Function Argument",
			scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "Ini Default Text",
			scope: ["source.ini"],
			settings: {
				foreground: "#5f4c65",
			},
		},
		{
			name: "Makefile prerequisities",
			scope: ["meta.scope.prerequisites.makefile"],
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "Makefile text colour",
			scope: ["source.makefile"],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Groovy import names",
			scope: ["storage.modifier.import.groovy"],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Groovy Methods",
			scope: ["meta.method.groovy"],
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "Groovy Variables",
			scope: ["meta.definition.variable.name.groovy"],
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "Groovy Inheritance",
			scope: ["meta.definition.class.inherited.classes.groovy"],
			settings: {
				foreground: "#5f4c65",
			},
		},
		{
			name: "HLSL Semantic",
			scope: ["support.variable.semantic.hlsl"],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "HLSL Types",
			scope: [
				"support.type.texture.hlsl",
				"support.type.sampler.hlsl",
				"support.type.object.hlsl",
				"support.type.object.rw.hlsl",
				"support.type.fx.hlsl",
				"support.type.object.hlsl",
			],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "SQL Variables",
			scope: ["text.variable", "text.bracketed"],
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "types",
			scope: ["support.type.swift", "support.type.vb.asp"],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "heading 1, keyword",
			scope: ["entity.name.function.xi"],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "heading 2, callable",
			scope: ["entity.name.class.xi"],
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "heading 3, property",
			scope: ["constant.character.character-class.regexp.xi"],
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "heading 4, type, class, interface",
			scope: ["constant.regexp.xi"],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "heading 5, enums, preprocessor, constant, decorator",
			scope: ["keyword.control.xi"],
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "heading 6, number",
			scope: ["invalid.xi"],
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "string",
			scope: ["beginning.punctuation.definition.quote.markdown.xi"],
			settings: {
				foreground: "#5f4c65",
			},
		},
		{
			name: "comments",
			scope: ["beginning.punctuation.definition.list.markdown.xi"],
			settings: {
				foreground: "#6a6aa4",
			},
		},
		{
			name: "link",
			scope: ["constant.character.xi"],
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "accent",
			scope: ["accent.xi"],
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "wikiword",
			scope: ["wikiword.xi"],
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "language operators like '+', '-' etc",
			scope: ["constant.other.color.rgb-value.xi"],
			settings: {
				foreground: "#ffffff",
			},
		},
		{
			name: "elements to dim",
			scope: ["punctuation.definition.tag.xi"],
			settings: {
				foreground: "#6a6aa4",
			},
		},
		{
			name: "C++/C#",
			scope: [
				"entity.name.label.cs",
				"entity.name.scope-resolution.function.call",
				"entity.name.scope-resolution.function.definition",
			],
			settings: {
				foreground: "#a75293",
			},
		},
		{
			name: "Markdown underscore-style headers",
			scope: [
				"entity.name.label.cs",
				"markup.heading.setext.1.markdown",
				"markup.heading.setext.2.markdown",
			],
			settings: {
				foreground: "#4075ba",
			},
		},
		{
			name: "meta.brace.square",
			scope: [" meta.brace.square"],
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			name: "Comments",
			scope: "comment, punctuation.definition.comment",
			settings: {
				fontStyle: "italic",
				foreground: "#6a6aa4",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown Quote",
			scope: "markup.quote.markdown",
			settings: {
				foreground: "#6a6aa4",
			},
		},
		{
			name: "punctuation.definition.block.sequence.item.yaml",
			scope: "punctuation.definition.block.sequence.item.yaml",
			settings: {
				foreground: "#4f4d7e",
			},
		},
		{
			scope: ["constant.language.symbol.elixir"],
			settings: {
				foreground: "#1f7d89",
			},
		},
		{
			name: "js/ts italic",
			scope:
				"entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
			settings: {
				fontStyle: "italic",
			},
		},
		{
			name: "comment",
			scope: "comment.line.double-slash,comment.block.documentation",
			settings: {
				fontStyle: "italic",
			},
		},
		{
			name: "Python Keyword Control",
			scope: "keyword.control.import.python,keyword.control.flow.python",
			settings: {
				fontStyle: "italic",
			},
		},
		{
			name: "markup.italic.markdown",
			scope: "markup.italic.markdown",
			settings: {
				fontStyle: "italic",
			},
		},
	],
	bg: "#fafafa",
	fg: "var(--color-violet)",
};
