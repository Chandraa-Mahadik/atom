// This is the single place for re-exports only. Anything not exported from here remains private and rest is for consumers to use..

// Import the complete CSS bundle (tokens, ripple, base styles)
// This will be processed by Vite and output to dist/atom.css
// import './styles/bundle.css' // NOTE : Not to import in this manner as direct styles. but as below.
// import "./runtime/styles"; //  Now in types, it will import ./runtime/styles (a TS module), not CSS directly.
// But TS may still emit a reference — that’s fine because it’s TS, not CSS.
// the runtime/styles via approach did not work ( atom.css file was missing in dist ) so for now : import './styles/bundle.css' this is used. and it is working.

// NOTE : By doing this vite will emit dist/atom.css because CSS is in the build graph.
import "./styles/atom.css";

export * from './components/button'
export * from './components/badge'
// export * from './components/form'

export * from './components/avatar'
export * from './components/calendar'
export * from './components/card'
export * from './components/checkbox'
export * from './components/contentCard'
export * from './components/dialog'
export * from './components/dialog'
export * from './components/heading'
export * from './components/paper'
export * from './components/progressBar'
export * from './components/radio'
export * from './components/statCardA'
export * from './components/statCardB'
export * from './components/statCardC'
export * from './components/dataTable'
export * from './components/tabs'
export * from './components/text'
export * from './components/textArea'
export * from './components/tooltip'
export * from './components/inputNumber'
export * from './components/dropdown'
export * from './components/popover'
export * from './components/input'


// Optionally re-export icons and hooks too
export * from "./hooks";

// Re-export lib utilities (e.g. class variance authority helpers)
// Exporting lib/cn so that consumers can use utility types and functions from this package
// export * from "./lib/cn";
// NOTE : For now as a decision cn will be internal only.
