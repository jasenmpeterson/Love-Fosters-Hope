<template>
  <div class="mentors__page">
		<banner>
			<template slot="header">
				<h1 class="upper">Mentors</h1>
			</template>
			<template slot="paragraph">
				<p class="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non mauris est. Donec justo quam, tempus non odio eu, pellentesque sagittis sapien. Donec et tortor non nulla porttitor suscipit. Ut eu mauris justo. Nunc nisi turpis, mattis quis arcu convallis, porta tincidunt augue. Suspendisse eu lacinia nibh, in lacinia arcu. Vivamus ut velit ac lectus finibus ornare et at mauris. Phasellus accumsan a sapien at tempus.</p>
			</template>
		</banner>
    <section class="mentors__content__wrap">
      <div class="row align-center">
        <div class="col col-6 align__text__center">
          <h1 class="upper">
            Since 2009, Love Fosters Hope has been pairing teens in need of a friend and positive role model with adults of exceptional character and compassion.
          </h1>
          <p class="large">
            Some of our earliest mentors began when their protégées were in their early teens, and are now helping to guide them through their college years. Our intentional mentoring program is a proven method to help teens reach their full potential. The goal is to pair every young person who attends Teen Reach Adventure Camp or Bridge with a healthy mentoring relationship, especially those 15 years and older. Our program is built on a Christian foundation and brings hope, healing and a bright future to teens in foster care.
          </p>
        </div>
      </div>
    </section>
    <section class="mentors__book__wrap">
      <div class="row gutters">
        <div class="col col-8">
          <h2>Love Fosters Hope developed a book that helps mentors challenge, encourage and inspire their teens as they walk them through the process of planning their lives.</h2>
          <p>This resource guides the teen to investigate possible career opportunities, as well as identify their gifts, strengths, passions and weaknesses. It also helps the teen research different career possibilities, training and education requirements, salary ranges and job availabilities. A key section identifies obstacles or distractions that could potentially derail the teen from achieving their goals, and once they’re recognized, decide how each they should overcome them.</p>
        </div>        
        <div class="col col-4">
          <img src="http://via.placeholder.com/600x250">
        </div>
      </div>
    </section>
    <section class="mentors__roles">
      <div class="row align-center">
        <div class="col col-6">
          <h2>Mentors serve to enrich relationships built during camp experiences by partnering with foster and at-risk teens to help them plan for their futures, understanding healthy boundaries and relationships, and providing a source of consistency in their lives as they transition into adulthood.</h2>
          <section class="timeline__list">
            <ul>
              <li>
                <div class="direction-r">
                  <div class="flag__wrapper">
                    <span class="flag">Teacher</span>
                  </div>
                  <div class="description">
                    Providing learning opportunities and offering valuable life experience as a guide
                  </div>
                </div>
              </li>
              <li>
                <div class="direction-l">
                  <div class="flag__wrapper">
                    <span class="flag">Role model</span>
                  </div>
                  <div class="description">
                    Demonstrating exemplary behavior and offering positive values that will increase chances for success and happiness
                  </div>
                </div>
              </li>              
            </ul>
          </section>    
        </div>
      </div>
    </section>
    <section class="mentoring__availibility">
        <div class="row between">
          <div class="col col-4">
            <img src="http://via.placeholder.com/600x250">
          </div>
          <div class="col col-6">
            <h2>Mentoring is available for youth in foster care, ages 12-19. Our mentoring program is year round and has a proven method for helping young people of all backgrounds and circumstances achieve their potential. Mentors offer support, counsel, and friendship, while setting a positive example.</h2>
          </div>
        </div>
    </section>     
    <section class="mentors__page__quote">
      <div class="row align-center">
        <div class="col col-6">
          <blockquote>
            <h2>You don’t trip over it, or run into it, you plan and strive for the life you deserve.</h2>
          </blockquote>
        </div>
      </div>
    </section>
    <section class="mentors__page__volunteer">
      <div class="row align-center align__text__center">
        <div class="col col-6">
          <h2>One of the most powerful gifts mentors give to teens in our program is simply to listen.</h2>
          <p>Growing up in a foster or group home with anywhere from six to 20 other teens means it’s often easy to get lost in the shuffle, but having even one person in their life who’s focused on hearing them may be the closest they've felt to being loved.</p>
          <p class="italic strong">Remember, "To the world you may be one person, but to one person you may be the world."</p>
          <button>Volunteer</button>
        </div>
      </div>
    </section>    
  </div>
</template>
<script>
import banner from '../components/banner.vue';
export default {
	components: {
		banner
	}
};
</script>
