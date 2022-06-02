yarn run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com/HamzaDLM/hdlm_portfolio.git main:gh-pages

cd -