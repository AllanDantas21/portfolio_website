// Main components barrel exports
export * from './ui'
export * from './layout'
export * from './sections'

// Legacy exports for backward compatibility (will be removed in next phase)
export { default as Layout } from './layout/article'
export { default as Section } from './ui/section'
export { default as Paragraph } from './ui/paragraph'
export { BioSection, BioYear } from './ui/bio'
