##--- BASH SPECIFIC SETTINGS ---##
# bash history
shopt -s histappend                # enable history appending instead of overwriting
HISTSIZE=100000                    # remember up to 100.000 entries
HISTFILESIZE=$HISTSIZE             # store as many entries in file as in memory
HISTFILE=$HOME/.history            # share history file with zsh
HISTCONTROL=ignoredups:ignorespace # ignore lines starting with a whitespace, as well as duplicates

# prompt styling
prompt_command () {
	# COMMANDS
	if [ "$HOSTNAME" == 'drewdev' ]; then
		local HOSTNAME_COLOR=${BGREEN}
	elif [ "$HOSTNAME" == 'drew-HP' ]; then
		local HOSTNAME_COLOR=${BCYAN}
	elif [ "$HOSTNAME" == 'Drewdesk' ]; then
		local HOSTNAME_COLOR=${BCYAN}
	else
		local HOSTNAME_COLOR=${BRED}
	fi

	# FUNCTIONS (rc.d/functions.sh)
	local JOBCOUNT="`jobscount`" # count of running jobs and stopped jobs in the background
	# local TITLEBAR='\[\e]2;`pwdtail`\a' # set the titlebar to the last 2 fields of pwd (title for ubuntu terminal tabs)
	local TITLEBAR='' # set the titlebar to the last 2 fields of pwd
	local BRANCH="`get_git_repo`"
	local VENV_NAME="`get_venv`"

	# PS1 LAYOUTS
	export PS1="\[${TITLEBAR}\]\n${WHITE}[${BYELLOW}\u${WHITE}@${HOSTNAME_COLOR}\h${WHITE}] ${GRAY}\w ${CYAN}${BRANCH} ${BLUE}${VENV_NAME} ${RED}${JOBCOUNT}\n${DEFAULT}$ "
}
PROMPT_COMMAND=prompt_command
if [ -f /usr/local/lib/python2.7/dist-packages/powerline/bindings/bash/powerline.sh ]; then
    source /usr/local/lib/python2.7/dist-packages/powerline/bindings/bash/powerline.sh
fi
##--- END BASH SPECIFIC SETTINGS ---##


##--- GENERIC SHELL SETTINGS ---##
# colors
DEFAULT="\[\e[0;39m\]" # return color to Terminal setting for text color
WHITE="\[\e[0;37m\]"
CYAN="\[\e[0;36m\]"
PURPLE="\[\e[0;35m\]"
BLUE="\[\e[0;34m\]"
YELLOW="\[\e[0;33m\]"
GREEN="\[\e[0;32m\]"
RED="\[\e[0;31m\]"
DKGRAY="\[\e[0;30m\]"

# bold colors
BDEFAULT="\[\e[1;39m\]" # return color to Terminal setting for text color
BWHITE="\[\e[1;37m\]"
BCYAN="\[\e[1;36m\]"
BPURPLE="\[\e[1;35m\]"
BBLUE="\[\e[1;34m\]"
BYELLOW="\[\e[1;33m\]"
BGREEN="\[\e[1;32m\]"
BRED="\[\e[1;31m\]"
BDKGRAY="\[\e[1;30m\]"

# set editor
export EDITOR=vim

# aliases
alias sudo='sudo ' # trick to make aliases available when using sudo
alias ls="ls --color=tty"
alias ll='ls -hal'

# functions
set_term_title() {
	echo -en "\033]0;$1\a"
}
lowercase() { # lowercase a string
	echo $(echo $1 | tr '[:upper:]' '[:lower:]')
}
uppercase() {
	echo $(echo $1 | tr '[:lower:]' '[:upper:]')
}
pwdtail () { # returns the last 2 fields of the working directory
	pwd awk -F/ '{nlast = NF -1;print $nlast"/"$NF}'
}
jobscount() { # used to display background jobs in PS1 prompt
	local stopped=$(jobs -sp | wc -l)
	local running=$(jobs -rp | wc -l)
	((running+stopped)) && echo -n "${running}r/${stopped}s "
}
function_exists() {
	[ `type -t $1`"" == 'function' ]
}
get_git_repo() {
	if function_exists "__git_ps1"; then
		echo "\$(__git_ps1 '(%s)')"
	fi
}
get_venv() {
	local VIRTUAL_ENV_NAME="$(basename "$VIRTUAL_ENV")"
	if [ -n "$VIRTUAL_ENV_NAME" ]; then
		echo "<${VIRTUAL_ENV_NAME}>"
	fi
}

# paths
export PATH="$HOME/bin:$PATH" # add bin path
export PATH="$HOME/sbin:$PATH" # add sbin path

# TODO not sure why these are specified.
ESC="\e["
PCOLOR="${ESC}1;154m"
SCOLOR="${ESC}1;154m"
MCOLOR=""

# sources
source /etc/bash_completion.d/git-prompt

# Set $UNODE to true if user is local or false if user is remote 
if [ -z "$UNODE" ]; then
	if [ -z "$SSH_CLIENT" ]; then
		export UNODE=true
	else
		export UNODE=false
	fi
fi

##--- END GENERIC SHELL SETTINGS ---##
