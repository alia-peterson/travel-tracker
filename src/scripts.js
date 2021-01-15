import domUpdates from './domUpdates'
import fetchApi from './fetchApi'

import './css/index.scss'

import Traveler from './traveler'
import Agent from './agent'
import Trip from './trip'
import Destination from './destination'

const travelerLoginButton = document.querySelector('#button-traveler')
const agentLoginButton = document.querySelector('#button-agent')
const logoffButton = document.querySelector('#button-logoff')
const dashboardView = document.querySelector('.dashboard')
const loginView = document.querySelector('.login')

travelerLoginButton.addEventListener('click', toggleScreen)
agentLoginButton.addEventListener('click', toggleScreen)
logoffButton.addEventListener('click', toggleScreen)

function toggleScreen() {
  dashboardView.classList.toggle('hidden')
  loginView.classList.toggle('hidden')
  logoffButton.classList.toggle('hidden')
}
