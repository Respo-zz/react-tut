import React, {Component} from "react"

class MemeGenerator extends Component{
  constructor(){
    super()
    this.state = {
      topText:"",
      bottomText:"",
      randomImg:"http://i.imgflip.com/1bij.jpg",
      imgName:"",
      allMemeImgs:[]
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    fetch ("https://api.imgflip.com/get_memes")
      .then (response => response.json())
      .then (response => {
        const {memes} = response.data
        this.setState ({
              allMemeImgs : memes
            })
      })

  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({ [name] : value })
  }

  handleSubmit(event){
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    const randMemeName = this.state.allMemeImgs[randNum].name
    this.setState ({
      randomImg : randMemeImg,
      imgName : randMemeName

    })
  }

  render() {
    return (
      <div>
        <h1> Meme Generator</h1>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          value={this.state.topText}
          name="topText"
          placeholder="top text"
          onChange={this.handleChange}
          />

          <input
          type="text"
          value={this.state.bottomText}
          name="bottomText"
          placeholder="bottom text"
          onChange={this.handleChange}
          />
          <br />

          <button>Save</button>

        </form>

        <div>
          <img src={this.state.randomImg} alt={this.state.imgName} /> 
          <p> {this.state.imgName} </p>
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator
