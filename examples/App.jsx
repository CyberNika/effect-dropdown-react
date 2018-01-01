import React from 'react'

import { EffectDropdown, EffectDropdownItem } from '../src/index'
import '../src/styles/index.styl'

// import { EffectDropdown, EffectDropdownItem } from 'effect-dropdown-react'
// import 'effect-dropdown-react/dist/index.css'

const reactLogo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' // eslint-disable-line
const githubLogoPath = 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z' // eslint-disable-line

const App = () => (
  <div className="container">
    <header>
      <img
        src={reactLogo}
        alt="react.js"
        className="react-logo"
      />

      <h1>EffectDropdown</h1>

      <p className="description">Simple effects of Dropdown for React.js.</p>

      <a target="__blank" href="https://github.com/XBT1/effect-dropdown-react">
        <img
          src="https://img.shields.io/github/stars/XBT1/effect-dropdown-react.svg?style=for-the-badage&amp;label=Stars"
          alt="GitHub Stars"
        />
      </a>

      <a className="github-link" href="https://github.com/XBT1/effect-dropdown-react">
        <svg
          aria-hidden="true"
          className="octicon octicon-mark-github"
          height="32"
          version="1.1"
          viewBox="0 0 16 16"
          width="32"
        >
          <path
            fillRule="evenodd"
            d={githubLogoPath}
          />
        </svg>
      </a>
    </header>

    <main>
      <div className="dropdown-wrapper">
        <p className="dropdown-desc">
          默认效果，折叠时具有些许间隔，激活时选项之间间隔 5px。

          <a
            className="source-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/XBT1/effect-dropdown-react/blob/master/examples/App.jsx#L65"

          >
            源码
          </a>
        </p>

        <div className="dropdown-main">
          <EffectDropdown label="Pick your direction" style={{ zIndex: 4000 }}>
            <EffectDropdownItem onClick={(args) => { console.log(args) }}>
              <i className="ion-arrow-up-c" />
              <span>Up</span>
            </EffectDropdownItem>
            <EffectDropdownItem>
              <i className="ion-arrow-right-c" />
              <span>Right</span>
            </EffectDropdownItem>
            <EffectDropdownItem disabled>
              <i className="ion-arrow-down-c" />
              <span>Down</span>
            </EffectDropdownItem>
            <EffectDropdownItem>
              <i className="ion-arrow-left-c" />
              <span>Left</span>
            </EffectDropdownItem>
          </EffectDropdown>
        </div>
      </div>

      <div className="dropdown-wrapper">
        <p className="dropdown-desc">
          random 效果，折叠时具有些许间隔，激活时选项之间间隔 5px，每个选项具有随机的角度旋转和偏移，以及不同的 animation-delay。

          <a
            className="source-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/XBT1/effect-dropdown-react/blob/master/examples/App.jsx#L101"
          >
            源码
          </a>
        </p>

        <div className="dropdown-main">
          <EffectDropdown label="Choose your pet" activeColor="#4d8c9d" effect="random" style={{ zIndex: 3500 }}>
            <EffectDropdownItem>Husky</EffectDropdownItem>
            <EffectDropdownItem>Shorthair</EffectDropdownItem>
            <EffectDropdownItem>Monkey</EffectDropdownItem>
            <EffectDropdownItem>Canary</EffectDropdownItem>
          </EffectDropdown>
        </div>
      </div>

      <div className="dropdown-wrapper">
        <p className="dropdown-desc">
          camber 效果，折叠时具有些许间隔，激活时选项之间间隔 5px，依次排列组成圆弧状，并有不同的 animation-delay。

          <a
            className="source-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/XBT1/effect-dropdown-react/blob/master/examples/App.jsx#L125"
          >
            源码
          </a>
        </p>

        <div className="dropdown-main">
          <EffectDropdown label="Set the currency" activeColor="#97d1bc" effect="camber" style={{ zIndex: 3400 }}>
            <EffectDropdownItem disabled>
              <i className="ion-social-usd" />
              <span>USD</span>
            </EffectDropdownItem>
            <EffectDropdownItem>
              <i className="ion-social-bitcoin" />
              <span>Bitcoin</span>
            </EffectDropdownItem>
            <EffectDropdownItem>
              <i className="ion-social-yen" />
              <span>Yen</span>
            </EffectDropdownItem>
            <EffectDropdownItem>
              <i className="ion-social-euro" />
              <span>Euro</span>
            </EffectDropdownItem>
          </EffectDropdown>
        </div>
      </div>


      <div className="dropdown-wrapper">
        <p className="dropdown-desc">
          raiseLabel 效果，折叠时具有些许间隔，激活时选项之间没有间隔，依次排列。label 被点击时会有收缩的 3D 效果。

          <a
            className="source-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/XBT1/effect-dropdown-react/blob/master/examples/App.jsx#L162"
          >
            源码
          </a>
        </p>

        <div className="dropdown-main">
          <EffectDropdown
            label="Select your platform"
            activeColor="#f8b161"
            raiseLabel
            gutter={0}
            style={{ zIndex: 3300 }}
          >
            <EffectDropdownItem>
              <i className="ion-social-apple" />
              <span>iOS</span>
            </EffectDropdownItem>
            <EffectDropdownItem>
              <i className="ion-social-android" />
              <span>Android</span>
            </EffectDropdownItem>
            <EffectDropdownItem>
              <i className="ion-social-windows" />
              <span>Windows</span>
            </EffectDropdownItem>
            <EffectDropdownItem>
              <i className="ion-social-tux" />
              <span>Linux</span>
            </EffectDropdownItem>
          </EffectDropdown>
        </div>
      </div>

      <div className="dropdown-wrapper">
        <p className="dropdown-desc">
          stagger 效果。默认不折叠，激活时从两侧滑入，且选项之间间隔 5px。

          <a
            className="source-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/XBT1/effect-dropdown-react/blob/master/examples/App.jsx#L204"
          >
            源码
          </a>
        </p>

        <div className="dropdown-main">
          <EffectDropdown
            label="Select your technology"
            activeColor="#c29ad2"
            effect="stagger"
            style={{ zIndex: 3200 }}
          >
            <EffectDropdownItem>
              <i className="ion-social-html5" />
              <span>HTML5</span>
            </EffectDropdownItem>
            <EffectDropdownItem>
              <i className="ion-social-angular" />
              <span>Angular</span>
            </EffectDropdownItem>
            <EffectDropdownItem>
              <i className="ion-social-javascript" />
              <span>JavaScript</span>
            </EffectDropdownItem>
            <EffectDropdownItem>
              <i className="ion-social-python" />
              <span>Python</span>
            </EffectDropdownItem>
            <EffectDropdownItem>
              <i className="ion-social-markdown" />
              <span>Markdown</span>
            </EffectDropdownItem>
          </EffectDropdown>
        </div>
      </div>

      <div className="dropdown-wrapper">
        <p className="dropdown-desc">
          fence 效果。默认不折叠，激活时依次从两侧滑入，且选项之间间隔 5px，具有不同的 animation-delay。

          <a
            className="source-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/XBT1/effect-dropdown-react/blob/master/examples/App.jsx#L249"
          >
            源码
          </a>
        </p>

        <div className="dropdown-main">
          <EffectDropdown label="Share to..." activeColor="#e66b20" effect="fence" style={{ zIndex: 3000 }}>
            <EffectDropdownItem>
              <i className="ion-social-twitter" />
              <span>Twitter</span>
            </EffectDropdownItem>
            <EffectDropdownItem>
              <i className="ion-social-facebook" />
              <span>Facebook</span>
            </EffectDropdownItem>
            <EffectDropdownItem>
              <i className="ion-social-googleplus" />
              <span>Google+</span>
            </EffectDropdownItem>
            <EffectDropdownItem>
              <i className="ion-social-instagram" />
              <span>Instagram</span>
            </EffectDropdownItem>
          </EffectDropdown>
        </div>
      </div>
    </main>

    <footer>
      <p>
        <span>Inspired by </span>
        <a
          target="__blank"
          href="https://tympanus.net/Development/SimpleDropDownEffects"
          className="reference-link"
        >
          SimpleDropDownEffects
        </a>
        <span> ❤︎ Created by </span>
        <a
          target="__blank"
          href="https://github.com/XBT1/"
          className="reference-link"
        >
          XBT1
        </a>
      </p>
      <p>
        <span>For Vue version to see </span>
        <a
          target="__blank"
          href="https://github.com/XBT1/effect-dropdown-vue"
          className="reference-link"
        >
          effect-dropdown-vue
        </a>
      </p>
    </footer>
  </div>
)

export default App
