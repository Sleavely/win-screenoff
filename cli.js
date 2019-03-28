#!/usr/bin/env node

const screenoff = require('.')
screenoff()
  .catch(err => {
    console.error('Something went horribly wrong. Do you have Powershell installed?', err)
  })
