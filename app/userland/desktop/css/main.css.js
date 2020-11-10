import {css} from 'beaker://app-stdlib/vendor/lit-element/lit-element.js'
import commonCSS from 'beaker://app-stdlib/css/common.css.js'
import buttonsCSS from 'beaker://app-stdlib/css/buttons2.css.js'
import tooltipCSS from 'beaker://app-stdlib/css/tooltip.css.js'
import spinnerCSS from 'beaker://app-stdlib/css/com/spinner.css.js'

const cssStr = css`
${commonCSS}
${buttonsCSS}
${tooltipCSS}
${spinnerCSS}

:host {
  display: block;
}

.hidden {
  display: none !important;
}

input:focus {
  border-color: var(--border-color--focused);
  box-shadow: 0 0 2px #7599ff77;
}

#topright {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 101;
}

#topright a {
  margin-left: 10px;
  font-size: 12px;
  opacity: 0.85;
}

#topright a span {
  opacity: 0.8;
  font-size: 11px;
}

.no-feed-view {
  margin: 30vh 0px 0;
}

.release-notice {
  position: relative;
  width: 100%;
  padding: 12px 18px;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-align: center;
  background: var(--bg-color--light);
  border-top: 1px solid var(--border-color--light);
}

.release-notice .view-release-notes:hover {
  text-decoration: underline;
}

.release-notice .fa-rocket {
  margin-right: 5px;
}

.release-notice .close {
  color: var(--text-color--very-light);
  float: right;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  background: var(--bg-color--default);
  padding: 0 10px 4px;
  box-sizing: content-box;
  border-bottom: 1px solid var(--border-color--light);
}

.pins {
  position: relative;
  display: grid;
  margin: 30px auto 30px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 15px;
  width: 100%;
  max-width: 1000px;
  user-select: none;
}

.pin {
  cursor: pointer;
  position: relative;
  border-radius: 3px;
  color: inherit;
  border-radius: 3px;
  overflow: hidden;
  user-select: none;
  min-height: 100px;
}

.pin:hover {
  text-decoration: none;
}

.pin .thumb {
  display: block;
  margin: 0 auto;
  border-radius: 4px;
  width: 100px;
  height: 70px;
  line-height: 70px;
  object-fit: cover;
  object-position: top center;
  border: 1px solid var(--border-color--default);
}

.pin:hover .thumb {
  border-color: #889;
}

.pin .details {
  padding: 10px 2px 10px;
}

.pin .details > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pin .title {
  font-size: 12px;
  line-height: 20px;
  text-align: center;
}

.pin.add {
  font-size: 21px;
  color: rgba(0, 0, 150, 0.35);
  cursor: pointer;
}

.pin.add .thumb {
  background: var(--bg-color--semi-light);
  border: 0;
}

.pin.add:hover {
  color: rgba(0, 0, 150, 0.5);
}

@media (prefers-color-scheme: dark) {
  .pin.add {
    color: #89899e;
  }
  
  .pin.add:hover {
    color: #aeaec1;
  }
}

.views > * {
  display: block;
  padding: 0 10px;
  height: calc(100vh - 50px);
  overflow: auto;
}

.onecol {
  margin: 20vh auto 0;
  max-width: 900px;
}

.twocol {
  margin: 90px 20px 0;
  display: grid;
  grid-template-columns: minmax(0, 2fr) 1fr;
  gap: 30px;
}

.twocol .sidebar {
  padding: 20px 0;
}

@media (max-width: 1000px) {
  .onecol {
    padding: 0 20px;
  }
}

@media (max-width: 900px) {
  .twocol {
    display: block;
  }
  .twocol > :last-child {
    display: none;
  }
}

.whats-new {
  text-align: center;
  margin-bottom: 40px;
}

.whats-new h3 {
  font-size: 24px;
  line-height: 1;
  margin: 0 0 30px;
}

.whats-new h3 .dismiss {
  font-size: 12px;
  color: var(--text-color--light);
  margin-left: 5px;
  cursor: pointer;
}

.whats-new .columns {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.whats-new .columns .column {
  padding: 0 20px;
}

.whats-new .columns .column img {
  margin: 0 0 10px;
  border: 1px solid var(--border-color--light);
  border-radius: 4px;
}

.whats-new .columns .column .title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
}

.whats-new .columns .column .description {
  font-size: 16px;
}

.legacy-archives {
  font-size: 14px;
}

.legacy-archives a {
  color: var(--text-color--link);
  cursor: pointer;
}

.legacy-archives .archives {
  margin-top: 10px;
}

.legacy-archives .archive {
  padding: 10px;
  margin-bottom: 4px;
  border-radius: 4px;
  background: var(--bg-color--light);
}

.legacy-archives .archive:hover {
  background: #fafafd;
}

.legacy-archives .archive a {
  display: block;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
}
`
export default cssStr