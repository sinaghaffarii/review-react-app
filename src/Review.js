import React,{useState} from 'react' 
import People from './data'
import { FaQuoteLeft,FaChevronLeft, FaChevronRight} from 'react-icons/fa'


const Review = () => {

    const [index , setIndex] = useState(0)
    const { name, job, image, text} = People[index]
    const [readMore , setReadMore] = useState(false)

    const checkNumber = (number) => {
        if(number > People.length - 1) {
            return 0
        }
        if(number < 0) {
            return People.length - 1
        }
        return number
    }


    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    const rendomPerson = () => {
        let randomNumber = Math.floor(Math.random() * People.length)
        if(randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber))
    }

    return (
      <article className="review">
          <div className="img-container">
              <img src={image} alt={name} className="person-img"/>
              <span className="quote-icon">
                  <FaQuoteLeft/>
              </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          
          <p className="info">
          {readMore ? text : `${text.substring(0,150)}...`}
          <button className="read-info" onClick={() => setReadMore(!readMore)}>
              {readMore ? 'show less' : '   read more'}
          </button>
          </p>

          <div>
              <button className="prev-btn" onClick={prevPerson}>
                  <FaChevronLeft/>
              </button>
              <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight/>
              </button>
          </div>
          <button className="random-btn" onClick={rendomPerson}>surprise me</button>
      </article>
    )
}

export default Review