import React, {Component} from 'react'
import StaffItem from './StaffItem'
import dave from '../img/dave.jpg'
import jim from '../img/jim.jpg'
import larry from '../img/larry.jpg'
import marcus from '../img/marcus.jpg'
import mari from '../img/mari.jpg'
import tim from '../img/tim.jpg'
import person7 from '../img/person7.jpg'


class Staff extends Component {

  state = {
    staffmember: [
      {
        id: '1',
        photo: mari,
        name: 'Mari Kay H.',
        job_title: 'Treasure',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.',
      },

      {
        id:'2',
        photo: person7,
        name: 'Terry Summers',
        job_title: 'Secretary',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.',
      },

      {
        id:'3',
        photo: marcus,
        name: 'Marcus Oxford',
        job_title: 'Media Tech',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.',
      },

      {
        id:'4',
        photo: larry,
        name: 'Larry Neargarth',
        job_title: 'Pastor',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.',
      },

      {
        id:'5',
        photo: jim,
        name: 'Jim Sparrani',
        job_title: 'Church Board',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.',
      },
      
      {
        id:'6',
        photo: dave,
        name: 'Dave Ashbeck',
        job_title: 'Church Board',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.',
      },
      {
        id:'7',
        photo: tim,
        name: 'Tim Jeffords',
        job_title: 'Church Board',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.',
      },

    ]
  }

  render () {
    return (
      <section id="our-people" className="my-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="info-header mb-5">
                <h1 className="text-primary pb-3">
                  Who We are
                </h1>
                <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed orci posuere, lobortis metus a, feugiat nulla. Sed non arcu ante. Maecenas a tristique massa. Morbi egestas venenatis velit sit amet accumsan. Donec vel neque tristique, finibus nisl id, scelerisque diam. Vivamus aliquam vitae felis pulvinar facilisis. Pellentesque nunc enim, dictum nec eleifend vel, condimentum in nisi. Nullam pretium tellus quam, non porttitor urna semper non.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
                {this.state.staffmember.map(staff => (
                    <StaffItem key={staff.id} staff={staff} />
                      ))}
          </div>
        </div>
      </section>
      
          
          
          
       

    )

  }

}

export default Staff



