" COLORS!
syntax enable
filetype indent plugin on
sy on
set background=dark
set t_Co=256
" colorscheme Tomorrow-Night-Bright

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
NeoBundle 'bling/vim-airline'

"fonts
NeoBundle 'tomasr/molokai'
NeoBundle 'scrooloose/nerdtree'
NeoBundle 'tpope/vim-fugitive'
"NeoBundle 'valloric/youcompleteme'
NeoBundle 'sjl/gundo.vim'
NeoBundle 'kien/ctrlp.vim'
NeoBundle 'plasticboy/vim-markdown'
NeoBundle 'scrooloose/syntastic'
NeoBundle 'vim-scripts/buftabs'

NeoBundleCheck

"set list listchars=tab:❘-,trail:·,extends:»,precedes:«,nbsp:×
set list lcs=tab:\|\ "display tab lines
nnoremap <F5> :GundoToggle<CR>
colorscheme molokai
map <C-\> :NERDTreeToggle<CR>
hi normal ctermbg=NONE

let g:ctrlp_working_path_mode = 0
noremap <F1> :bprev<CR>
noremap <F2> :bnext<CR>
hi CursorLine cterm=NONE ctermbg=black
