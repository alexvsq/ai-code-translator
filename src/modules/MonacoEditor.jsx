'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@monaco-editor/react'
import Monokai from 'monaco-themes/themes/Monokai.json'
import Dracula from 'monaco-themes/themes/Dracula.json'
import TomorrowNightBlue from 'monaco-themes/themes/Tomorrow-Night-Blue.json'
import TomorrowNight from 'monaco-themes/themes/Tomorrow-Night.json'
import NightOwl from 'monaco-themes/themes/Night Owl.json'
import { useTranslatorAi } from '@/context/context'

export default function MonacoEditor({ theme }) {

    const editorRef = useRef(null);
    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    const snippetCode = `// type your code...`
    const { codeContent, setCodeContent, languageValue } = useTranslatorAi()

    function setEditorTheme(monaco) {
        monaco.editor.defineTheme('onedark', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                {
                    token: 'comment',
                    foreground: '#5d7988',
                    fontStyle: 'italic'
                },
                { token: 'constant', foreground: '#e06c75' }
            ],
            colors: {//transparent background
                'editor.background': '#00000000'
            }
        });
        monaco.editor.defineTheme('nightOwl', NightOwl);
        monaco.editor.defineTheme('tomorrowNightBlue', TomorrowNightBlue);
        monaco.editor.defineTheme('dracula', Dracula);
        monaco.editor.defineTheme('tomorrowNight', TomorrowNight);
        monaco.editor.defineTheme('monokai', Monokai);
    }

    return (
        <>
            <Editor
                beforeMount={setEditorTheme}
                onMount={handleEditorDidMount}
                theme={theme}
                height='100%'
                width='100%'
                language={languageValue}
                defaultValue={snippetCode}
                value={codeContent}
                onChange={(newValue) => setCodeContent(newValue)}
                options={{
                    lineNumbers: 'off',
                    minimap: { enabled: false },
                    fontFamily: 'cascadia code',
                    fontLigatures: true,
                    fontSize: 14,
                    folding: false,
                    scrollBeyondLastLine: false,
                    scrollbar: {
                        vertical: 'hidden',
                        horizontal: 'hidden',
                        verticalScrollbarSize: 0,
                        horizontalScrollbarSize: 0,
                        arrowSize: 0,
                    },
                    overviewRulerLanes: 0,
                    hideCursorInOverviewRuler: true,
                    overviewRulerBorder: false,
                    renderLineHighlight: 'none',
                    occurrencesHighlight: false,
                    selectionHighlight: false,
                    contextmenu: false,
                    glyphMargin: false,
                    renderWhitespace: 'none',
                    quickSuggestions: false,
                    parameterHints: false,
                    suggestOnTriggerCharacters: false,
                    wordBasedSuggestions: false,
                    codeLens: false,
                    rulers: [],
                    unicodeHighlight: {
                        ambiguousCharacters: false,
                        invisibleCharacters: false,
                        nonBasicASCII: false,
                    },
                    renderIndentGuides: false,
                    highlightActiveIndentGuide: false,
                    lineDecorationsWidth: 16,  // Añade espacio a la izquierda
                    lineNumbersMinChars: 0,    // Minimiza el espacio reservado para números de línea
                    glyphMargin: false,        // Desactiva el margen de glifos
                    // folding: false,            // Desactiva el plegado de código
                    /* padding: {
                        top: 8,
                        bottom: 8
                    } */
                }}
            />
        </>
    )
}