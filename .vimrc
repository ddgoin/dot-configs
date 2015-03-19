" COLORS!
syntax enable
syntax on
filetype indent plugin on
sy on
set background=dark
set t_Co=256
" colorscheme Tomorrow-Night-Bright

set lazyredraw
set ttyfast

au Filetype python setl noet ts=4 sw=4
" SPACES AND TABS!
set tabstop=4
set autoindent
set softtabstop=0
set shiftwidth=0
set noexpandtab
set modeline

set number
set ruler
set showcmd
set cursorline

set wildmenu
set lazyredraw
set showmatch

"FOLDING!
"set foldmethod=indent
"set foldcolumn=2
"set foldnestmax=2

"MOUSE CONTROL!
set mouse=a

"SEARCHING!
set incsearch
set ignorecase
set smartcase
set hlsearch
nnoremap <silent> <Space> :nohlsearch<Bar>:echo<CR>

"SWITCH BUFFERS WITHOUT SAVING!
set hidden

"HIGHLIGHT TRAILING WHITESPACES!
match ErrorMsg '\s\+$'

"REMOVE TRAILING WHITESPACES!
nnoremap <Leader>rtw :%s/\s\+$//e<CR>

"UPDATE VIMRC EASY!
nmap <Leader>s :source $MYVIMRC<CR>
nmap <Leader>v :e $MYVIMRC<CR>

if has('vim_starting')
   set nocompatible               " Be iMproved

   " Required:
   set runtimepath+=~/.vim/bundle/neobundle.vim/
 endif

 " Required:
 call neobundle#begin(expand('~/.vim/bundle/'))

 " Let NeoBundle manage NeoBundle
 " Required:
 NeoBundleFetch 'Shougo/neobundle.vim'

 " My Bundles here:
 " Refer to |:NeoBundle-examples|.
 " Note: You don't set neobundle setting in .gvimrc!

 call neobundle#end()

 " Required:
 filetype plugin indent on

 " If there are uninstalled bundles found on startup,
 " this will conveniently prompt you to install them.
 " NeoBundleCheck

"airline
set laststatus=2
let g:airline#extensions#tabline#enabled = 1
let g:airline_powerline_fonts = 1

"install vim packages
NeoBundle 'tomasr/molokai'
"NeoBundle 'altercation/vim-colors-solarized'
NeoBundle 'scrooloose/nerdtree'
NeoBundle 'bling/vim-airline'
NeoBundle 'tpope/vim-fugitive'
NeoBundle 'sjl/gundo.vim'
NeoBundle 'kien/ctrlp.vim'
NeoBundle 'plasticboy/vim-markdown'
NeoBundle 'scrooloose/syntastic'
"NeoBundle 'vim-scripts/buftabs'
NeoBundle 'ervandew/supertab'
"NeoBundle 'ap/vim-buftabline'
"NeoBundle 'valloric/youcompleteme'
"NeoBundle 'xolox/vim-misc'
"NeoBundle 'xolox/vim-notes'

NeoBundleCheck

"set list listchars=tab:❘-,trail:·,extends:»,precedes:«,nbsp:×
set list lcs=tab:\|\ "display tab lines
nnoremap <F5> :GundoToggle<CR>
map <C-\> :NERDTreeToggle<CR>
hi normal ctermbg=NONE

" COLORSCHEMES
"let g:airline_theme='lucius'
let g:airline_theme='simple'
colorscheme molokai
"set background=dark
"colorscheme solarized

let g:notes_directories = ['~/Projects/Notes']
let g:ctrlp_working_path_mode = 0
let g:ctrlp_arg_map = 1 "lets you send an argument when opening multiple tabs
noremap <F1> :bprev<CR>
noremap <F2> :bnext<CR>
hi CursorLine cterm=NONE ctermbg=black


" AUTO SESSIONS!
fu! SaveSess()
	execute 'mksession! ' . getcwd() . '/.session.vim'
endfunction

fu! RestoreSess()
	if filereadable(getcwd() . '/.session.vim')
		execute 'so ' . getcwd() . '/.session.vim'
		if bufexists(1)
			for l in range(1, bufnr('$'))
				if bufwinnr(l) == -1
					exec 'sbuffer ' . l
				endif
			endfor
		endif
	endif
endfunction

autocmd VimLeave * call SaveSess()
autocmd VimEnter * nested if !argc() | call RestoreSess() | endif

set sessionoptions-=options  " Don't save options
