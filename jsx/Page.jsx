var React = require('react')
var Header = require('./Header.jsx')

module.exports = React.createClass({
  'displayName': 'BlankPage.jsx',
  render: function () {
    var title = 'Story-12345'

    var header = <Header title={title} />
    return <div className='Page'>
      {header}
    </div>
  }
})
