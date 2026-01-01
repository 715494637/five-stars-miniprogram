\#### ⚠️ CRITICAL Bug Workaround



CRITICAL: Follow these guidelines when using tools operating on file paths EXCEPT `Bash` in any skill or agent. Otherwise, they will not work correctly.



\- When referencing file paths in tool calls, ALWAYS use the Windows-style paths with backslashes (`\\`), as we're running on Windows.

\- When referencing paths to the home directory, ALWAYS EXPAND the tilde symbol (`~`) representing the home directory to the full path, e.g., `C:\\Users\\some.user`.



\#### Applies To



\- `Edit`

\- `Glob`

\- `Grep`

\- `Read`



\#### Examples (CRITICAL Bug Workaround)



\##### ✅ Correct (File Paths)



```json

{

&nbsp;   "type": "tool\_use",

&nbsp;   "id": "...",

&nbsp;   "name": "Read",

&nbsp;   "input": {

&nbsp;       "file\_path": "C:\\\\path\\\\to\\\\some\\\\file.txt"

&nbsp;   }

}

```



```json

{

&nbsp;   "type": "tool\_use",

&nbsp;   "id": "...",

&nbsp;   "name": "Edit",

&nbsp;   "input": {

&nbsp;       "file\_path": "C:\\\\path\\\\to\\\\some\\\\file.txt",

&nbsp;       "old\_string": "...",

&nbsp;       "new\_string": "..."

&nbsp;   }

}

```



\##### ❌ Incorrect (File Paths)



```json

{

&nbsp;   "type": "tool\_use",

&nbsp;   "id": "...",

&nbsp;   "name": "Read",

&nbsp;   "input": {

&nbsp;       "file\_path": "/c/path/to/some/file.txt"

&nbsp;   }

}

```



... (rest omitted)

