import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentsList: []}

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newContact = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newContact],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeComments = event => {
    this.setState({commentInput: event.target.value})
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state
    console.log(commentsList)

    return (
      <div className="bg-container-top">
        <div className="bg-container">
          <div className="container">
            <h1 className="heading">Comments</h1>

            <form className="form" onSubmit={this.onAddComment}>
              <p className="paragraph">Say something about 4.0 technologies</p>
              <input
                type="text"
                placeholder="Your Name"
                onChange={this.onChangeNameInput}
                className="input"
                value={nameInput}
              />
              <textarea
                placeholder="Your Comment"
                className="textarea"
                onChange={this.onChangeComments}
                value={commentInput}
              />
              <button className="button" type="button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="image-comment"
            alt="comments"
          />
        </div>
        <hr className="line" />
        <p className="pargraph2">comments</p>
      </div>
    )
  }
}
export default Comments
