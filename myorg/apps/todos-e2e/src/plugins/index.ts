module.exports = (on: any, _config: any) => {
  // Tasks to run from the OS/nodeJS runtime.
  on('task', {
    log(message: any) {
      console.log(message)

      return null
    },
    table(message: any) {
      console.table(message)

      return null
    },
    a11yLog(violations: Array<any>) {
      console.log(
        `${violations.length} accessibility violation${
          violations.length === 1 ? '' : 's'
        } ${violations.length === 1 ? 'was' : 'were'} detected`
      )
      // pluck specific keys to keep the table readable
      const violationData = violations.map(
        ({ id, impact, description, nodes }) => ({
          id,
          impact,
          description,
          nodes: nodes.length
        })
      )
      console.table(violationData)

      return null
    }
  })
}
