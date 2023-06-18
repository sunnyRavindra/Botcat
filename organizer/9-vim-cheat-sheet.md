# Vim-Cheat-Sheet
## Navigation
h: Move left
j: Move down
k: Move up
l: Move right
0: Move to the beginning of the line
$: Move to the end of the line
gg:Move to the beginning of the file
G: Move to the end of the file
Ctrl + f: Move forward one page
Ctrl + b: Move backward one page

## Editing
i: Enter insert mode at the cursor
I: Enter insert mode at the beginning of the line
a: Enter insert mode after the cursor
A: Enter insert mode at the end of the line
o: Insert a new line below the current line
O: Insert a new line above the current line
x: Delete the character under the cursor
dd: Delete the current line
yy: Yank (copy) the current line
p: Paste the previously yanked or deleted text
u: Undo the last change
Ctrl + r: Redo the last change

## Search and Replace
/pattern: Search forward for "pattern"
?pattern: Search backward for "pattern"
n: Jump to the next occurrence of the search pattern
N: Jump to the previous occurrence of the search pattern
:%s/old/new/g: Replace all occurrences of "old" with "new" in the entire file
:%s/old/new/gc: Replace all occurrences of "old" with "new" in the entire file with confirmation

## Saving and Quitting
:w: Save the file
:q: Quit (close) the file
:q!: Quit without saving (force quit)
:wq or :x: Save and quit

## Other Useful Commands
:set nu: Show line numbers
:set nonu: Hide line numbers
:set syntax=language: Enable syntax highlighting for a specific programming language
:help keyword: Open Vim's built-in help for a specific keyword

