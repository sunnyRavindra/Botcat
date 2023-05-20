#! /bin/bash
npm create svelte@latest ca-svelte-frontend1 --y 
set timeout 10
expect "Welcome to SvelteKit!"
send "Skeleton project\r"