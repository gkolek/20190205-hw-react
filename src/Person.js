import React from 'react'

class Person extends React.Component {
  render() {

    const { name, email } = this.props
    return (
      <div> {
        name
          ? email
            ? `Hi, my name is ${name} and my email is ${email}`
            : `Hi, my name is ${name}`
          : `Hi, my email is ${email}`
      }
      </div>
    )
  }
}
export default Person