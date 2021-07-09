#!/bin/sh

OWD=$PWD
BASEDIR=$(dirname "$0")
cd $BASEDIR
pip uninstall jupyter_contrib_nbextensions
rm -rf jupyter_contrib_nbextensions
git clone https://github.com/ipython-contrib/jupyter_contrib_nbextensions.git
#rm -rf jupyter_contrib_nbextensions/src/jupyter_contrib_nbextensions/nbextensions/*
ln -s "$PWD/js/dist" "$PWD/jupyter_contrib_nbextensions/src/jupyter_contrib_nbextensions/nbextensions/oui"
pip install -e ./jupyter_contrib_nbextensions
#pip install --upgrade traitlets
jupyter contrib nbextension install
#jupyter contrib nbextension enable oui/main
cd $OWD
