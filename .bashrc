# .bashrc

# User specific aliases and functions

# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi

export DYLD_LIBRARY_PATH=/usr/local/mysql/lib 
export TERM="screen-256color"
export set PATH=$PATH:~
export PATH=/home/drew/scripts:$PATH
export CVNODE=drew

ESC="\e["
PCOLOR="${ESC}1;154m"
SCOLOR="${ESC}1;154m"
MCOLOR=""
#PS1="\[\e[00;37m\][\[\e[0m\]\[\e[00;36m\]\u@\h\[\e[0m\]\[\e[00;37m\]] \w\n\[\e[0m\]"
PS1="\[\e[01;37m\][\[\e[0m\]\[\e[01;33m\]\u@\H\[\e[0m\]\[\e[01;37m\]]\[\e[0m\]\[\e[00;37m\] \w\n\[\e[0m\]"
#PS1='\[\e[m\n\e[1;30m\][$$:$PPID \j:\!\[\e[1;30m\]]\[\e[0;36m\] \T \d \[\e[1;30m\][\[\e[1;34m\]\u@\H\[\e[1;30m\]:\[\e[0;37m\]${SSH_TTY} \[\e[0;32m\]+${SHLVL}\[\e[1;30m\]] \[\e[1;37m\]\w\[\e[0;37m\] \n($SHLVL:\!)\$ '
#PS1=`echo -e "${PCOLOR}"`"[\u@"`echo -e "${SCOLOR}"`"\h"`echo -e "${PCOLOR}"`" \w]"`echo -e "${ESC}0m"`" \`if [ \$? = 0 ]; then echo \:-\); else echo \:-O; fi\` \\n\$ "
#PS1=`echo -e "${PCOLOR}"`"{\u@"`echo -e "${SCOLOR}"`"\h"`echo -e "${PCOLOR}"`" \w}"`echo -e "${ESC}0m"`" \\n\$ "
alias 'ls'="ls --color=tty"
alias 'celar'="clear"
alias 'sl'="ls"
