import { connect } from 'react-redux'
import Submit from '../components/Submit'
import { database } from '../config/constants'

// import any actions

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (userId, data) => {
      if (userId) {
        database.app.database().ref(`userResults/${userId}`).set(data)
      } else {
        database.app.database().ref('userResults').push(data)
      }
    },
  }
}

const SubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Submit)

export default SubmitContainer
