#!/bin/bash


# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# フェイルセーフなどはしていないので、個別に分けて実行すること
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


# ==============================================================================
# Linux の初期設定を行うスクリプト（Debian）
# ==============================================================================

# -e（エラー発生でシェル終了）、-u（未設定の変数をエラーにする）、-o pipefail（パイプラインで一つでも失敗があればエラーにする）
set -euo pipefail

# apt のアップデート
echo "apt のアップデート"
apt-get update
apt-get upgrade -y
echo ">> OK"

# unzip のインストール
echo "unzip のインストール"
apt-get install -y unzip
echo ">> OK"

# jq のインストール
echo "jq のインストール"
apt-get install -y jq
echo ">> OK"

# curl のインストール
echo "curl のインストール"
apt-get install -y curl
echo ">> OK"

# VSCode 連携に必要な wget のインストール
apt-get install -y wget

# ==============================================================================
# Git のインストール
# ==============================================================================

# Git のインストール
echo "Git のインストール"
apt-get install -y git

# Git の SSH 
echo "Git の SSH 設定"
cd ~/
mkdir .ssh
cd .ssh
ssh-keygen -t rsa
touch config
cat << EOS >> config
Host github.com
  HostName github.com
  IdentityFile ~/.ssh/id_rsa
  User git
  Port 22
  TCPKeepAlive yes
  IdentitiesOnly yes
EOS
echo ">> OK"

# ユーザー名とメールアドレスの設定
echo "ユーザー名とメールアドレスの設定"
git config --global user.name "root-5"
git config --global user.email "hujisannrokuoumunaku.shigoto@gmail.com"
echo ">> OK"

# ==============================================================================
# Docker のインストール
# ==============================================================================

# # Docker のインストール
# echo "Docker のインストール"
# apt-get install -y docker.io
# systemctl start docker
# systemctl enable docker

# # docker-compose のインストール
# echo "docker-compose のインストール"
# apt-get install -y docker-compose

# 安全な変数展開、空白文字などで意図せぬ挙動にならない
# echo "${arg1}"

# ==============================================================================
# 言語のインストール
# ==============================================================================

# Go のインストール
echo "Go のインストール"
sudo apt-get install -y golang-go

# ==============================================================================
# bash の設定
# ==============================================================================

# .bashrc に追加
echo "bash の設定"
cat << EOS >> ~/.bashrc

# bash のデザインを変更
# \[\e[1m\] は以降を太字にする
# \[\e[36m\] は以降の文字をシアンにする
# \[\e[0m\] は以降の書式をリセットする
# \u はユーザ名、\h はホスト名、\w はカレントディレクトリ
PS1='\n\n\[\e[1m\]\[\e[36m\]\u@\h) \[\e[0m\] \[\e[1m\]\w\[\e[0m\]\n└────── \[\e[32m\]\[\e[1m\]$ \[\e[0m\]'
EOS
