" NEOBUNDLE!
if has('vim_starting')
	set nocompatible
	set runtimepath+=~/.vim/bundle/neobundle.vim/
endif
call neobundle#begin(expand('~/.vim/bundle/'))
NeoBundleFetch 'Shougo/neobundle.vim'

" MY BUNDLES!
NeoBundle 'tomasr/molokai'
NeoBundle 'bling/vim-airline'
NeoBundle 'vim-airline/vim-airline-themes'
NeoBundle 'tpope/vim-fugitive'
NeoBundle 'sjl/gundo.vim'
NeoBundle 'kien/ctrlp.vim'
NeoBundle 'plasticboy/vim-markdown'
NeoBundle 'scrooloose/syntastic'
NeoBundle 'ervandew/supertab'
NeoBundle 'qpkorr/vim-bufkill'
NeoBundle 'ddgoin/autosession'
NeoBundle 'gorodinskiy/vim-coloresque.git'
NeoBundle 'leafgarland/typescript-vim'
NeoBundle 'elzr/vim-json'

call neobundle#end()
filetype plugin indent on
NeoBundleCheck
" NEOBUNDLE END!


" COLORS!
syntax enable
syntax on
filetype indent plugin on
sy on
set background=dark
set t_Co=256
colorscheme molokai
let g:airline_theme='simple'
hi CursorLine cterm=NONE ctermbg=black


" USE SYSTEM CLIPBOARD!
set clipboard=unnamedplus


" SPACES AND TABS!
au Filetype python setl expandtab ts=4 sw=4 sts=4 "Python is picky
au Filetype html set filetype=htmldjango "Vim is picky with new files
au Filetype typescript set expandtab ts=2 sw=2
set tabstop=4
set autoindent
set softtabstop=0
set shiftwidth=0
set noexpandtab
set modeline

" Convert spaces to tabs on read and back on write for python
"set ts=4
"set sw=4
"au Filetype python
"	\	silent :set noexpandtab	|
"	\	silent :%s/    /	/ge

"au BufWritePre *.html
	\ :set expandtab	|
	\ :retab
"
"au BufWritePre *.py
	\ :set expandtab	|
	\ :retab


" LINE FEATURES!
set number
set ruler
set showcmd
set cursorline
set nowrap


" SEARCHING!
set wildmenu
set showmatch


" FAST REDRAW!
set lazyredraw
set ttyfast


" MOUSE CONTROL!
set mouse+=a
" make mouse controls when using putty=>tmux=>vim
if &term =~ '^screen'
	" tmux knows the extended mouse mode
	set ttymouse=xterm2
endif


" TAB/INDENT LINES
set list lcs=tab:\|\ "display tab lines
hi SpecialKey gui=NONE


" HIGHLIGHT TRAILING WHITESPACES!
"match ErrorMsg '\s\+$'
highlight ExtraWhitespace ctermbg=red guibg=red
match ExtraWhitespace /\s\+$/
"au BufWinEnter * match ExtraWhitespace /\s\+$/
"au InsertEnter * match ExtraWhitespace /\s\+\%#\@<!$/
"au InsertLeave * match ExtraWhitespace /\s\+$/
"au BufWinLeave * call clearmatches()


" SEARCHING!
set incsearch
set ignorecase
set smartcase
set hlsearch
nnoremap <silent> <Space> :nohlsearch<Bar>:echo<CR>


" BUFFERS!
set hidden "switch buffers without saving
noremap <F1> :bprev<CR>
noremap <F2> :bnext<CR>
noremap <Leader>w :BD<CR>


" REMOVE TRAILING WHITESPACES!
nnoremap <Leader>rtw :%s/\s\+$//e<CR>


" KEYBOARD SCROLLING!
set scrolloff=5


" FOLDING!
set nofoldenable "disable folding
let g:vim_markdown_folding_disabled=1


" UPDATE VIMRC EASY!
nmap <Leader>s :source $MYVIMRC<CR>
nmap <Leader>v :e $MYVIMRC<CR>


" CURSOR SHAPE! (gnome-terminal only)
au InsertEnter * silent execute "!gconftool-2 --type string --set /apps/gnome-terminal/profiles/Default/cursor_shape ibeam"
au InsertLeave * silent execute "!gconftool-2 --type string --set /apps/gnome-terminal/profiles/Default/cursor_shape block"
au VimEnter * silent execute "!gconftool-2 --type string --set /apps/gnome-terminal/profiles/Default/cursor_shape block"
au VimLeave * silent execute "!gconftool-2 --type string --set /apps/gnome-terminal/profiles/Default/cursor_shape block"


" VIM AIRLINE!
set laststatus=2
let g:airline#extensions#tabline#enabled = 1
let g:airline_powerline_fonts = 1


" CTRLP!
let g:ctrlp_working_path_mode = 0
let g:ctrlp_arg_map = 1 "lets you send an argument when opening multiple tabs


" BUNDLE KEYMAPS!
nnoremap <F5> :GundoToggle<CR>
map <C-\> :NERDTreeToggle<CR>
hi normal ctermbg=NONE
