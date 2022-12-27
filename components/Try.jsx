import React from 'react'

const Try = () => {
  return (
          <div class="container">
          <!-- completed -->
            <div class="step completed">
              <div class="v-stepper">
                <div class="circle"></div>
                <div class="line"></div>
              </div>
        
              <div class="content">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
          </div>
          
          {/* <!-- active --> */}
          <div class="step active">
            <div class="v-stepper">
              <div class="circle"></div>
              <div class="line"></div>
            </div>
        
            <div class="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
          </div>
          
            {/* <!-- empty --> */}
          <div class="step empty">
              <div class="v-stepper">
                <div class="circle"></div>
                <div class="line"></div>
              </div>
        
              <div class="content">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting
              </div>
          </div>
          
          {/* <!-- regular --> */}
          <div class="step">
              <div class="v-stepper">
                <div class="circle"></div>
                <div class="line"></div>
              </div>
        
              <div class="content">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
          </div>
          
        </div>
  )
}

export default Try