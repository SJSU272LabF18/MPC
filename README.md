# Another idea outside of MPC:
  # Idea: Shark Tanks on Web
  ##### Project Description:
  In this era, we find start-ups emarging each and every day. But since 2011, only 4% startup made it to the second year and one of the reason behind this is the funding. Regarding funding statistics, 82% of the funds come from the entrepreneur himself or herself. Shark Tanks gave a chance to this budding entrepreneurs to bring their dreams to fruition by getting funded by the show's hosts(called sharks).
  So our idea is to provide this platform on the web where the entrepreneurs and the investors are brought together and where investors get an opportunity to look into the start-ups going around in the world and investigating and investing in any startup. From entrepreneurs point of view, they can publish their start up on the web and it will immediately be up for investment requests.
  
  Shark Tanks concept: https://en.wikipedia.org/wiki/Shark_Tank
  

# Project-Team-12 None approved ..here is what I am asking you to research and propose a practical use case: Multi-party computing

In the era of AI and ML, where it can’t leverage require training data due to privacy regulations, MPC allows data scientists to leverage data while keeping it private and secured. Resource on MPC: https://github.com/rdragos/awesome-mpc
Cybernetica is the main vendor: https://cyber.ee/


#### Student Names:
Aditi Kumari, 
Aditya Doshatti, 
Darshil Kapadia, 
Devashish Nyati

#### Team Name: 
Tech Elves

## Idea 1: Drunk Driving Prevention

##### Project description:
There are a lot of accidents happening when the drivers are under the influence of alcohol. Our
aim is to analyze the alcohol related motor vehicle crashes and create a sensor based-switch to
stop such accidents.

##### Proposed methodology:
To stop such alcohol related motor crashes, we aim to create a sensor based switch which will
analyze the percentage of blood alcohol concentration(BAC) and set the BAC level after
analyzing the accident data set. So whenever the driver is having BAC above a certain level, he
will not be able to drive the car.

##### Our Approach:
1. Get Accident data set.
2. Analyze the data set and get useful values from it.
3. Create a sensor based switch using MQ3 sensors.


## Idea 2: Smart Fridge

Project description:
We sometimes face problems like our groceries are going to finish and we forget to buy new
groceries. To solve this problem, we aim to design an intelligent fridge which will monitor the
particulars kept in it in real time and inform the user if something is going to finish so that
he/she can buy it again.

##### Proposed methodology:
Once quantity of item reaches below specified critical level, an alert message will be sent to the
owner stating these items need to be brought. If user gives the consent the order will be
automatically placed according to the saved information about seller and card details.

##### Our Approach:
1. Determine depleted items using Raspberry Pi Cam and weight based sensors.
2. Use OpenCV for image processing.
3. Send alert to user based on collected information.
4. Place order for the items user wants to buy through online portal.


## Idea 3: Intelligent Profile Recommender System

##### Abstract:
These days we encounter so many profile suggestions on social media based on our location or
popularity of the profile. Getting a friend suggestion based on mutual friends/location is a good
method but can still be improved by ge􀆫ng personalized recommendations. Personalized
recommendations are based on our profile and our interests and our likes, we get a
recommendations based on one’s personality vector.
We can say that what we post, upload and update on our social media platforms is an extended
identity of our-self in the digital world. It can be derived that what we portrait our-self in the
digital world is an extended personality of our-self and can be related to us. Thus, proving that
one’s digital personality in the digital world is actually one’s true personality in the real world.
So, it can be said that what we get from the virtual world will help us to better understand the
user and his behavior/personality in day to day life. Most of the online suggestion or
recommendation of user profile is either random or based on location/gender/mutual friends.

##### Proposed methodology:
Our solution is to give the recommendations based on the personality of the users and thus
increases the chance of getting a favorable match as it will recommend it using your personality.
It will be able to do so by using the data you have given in your social media handles photos,
posts, location, updates, statuses. All of this data contribute to your personality and will help us
improve the match that you will get.

##### Our Approach:
1. Get dataset of a user from his/her social media profile(twitter here)
2. Predict user’s personality (using Support Vector Machines)
3. Generate data set
4. Train model
5. Select a set of probable user profiles that are a good set of match for the current user.

Abstract Run:
User profile: <1 , 0 , 1 , 0 , 1 , 1>
Recommendatons:
1. < 1 , 0 , 1 , 0 , 1 , 0 >
2. < 1 , 0 , 1 , 1 , 1 , 0 >
3. < 1 , 1 , 1 , 0 , 1 , 0 >
4. < 1 , 1 , 1 , 1 , 1 , 0 >



## Idea 4: Security through Geo-Fencing

##### Abstract:
We cannot stress more about how important security is at any place, be it, bank institutions or
education institutitions or any organizations. Security is must at every place. These days, CCTV
surveillance is widely used to provide one form of physical security in any organization. The
CCTV surveillance system also allows users to view the streaming on-the-go(for example, on
mobile devices). But, if you think deeply into this, we can identify that this system has 2
problems which can help us in improving the current technology. Those are,
1) These CCTV surveillances are not smart enough to notify the user when actually the
security is being compromised.
2) CCTV surveils the whole room where it is required to function. What to do if we only
want to focus on one particular area inside a room, which should not be compromised?

For example: Any user, ideally, is not going to sit and watch the surveillance video on a phone. In
fact, most of times, users only look into the feed if any event had happened which might have
compromised the security. Now instead of this approach, wouldn’t it better if the CCTV
surveillance notifies the user at the time when security is being compromised inside an area
which you wanted to protect(and not the whole room) .
Proposed methodology:
We'll alert the user as soon as someone enters the area of the room (which should not be
compromised), along with the photo of the person who is trying to breach the security without
making the person know about it. We’ll use OpenCV to geo fence a particular area.

##### Our Approach:
1. Raspberry Pi and Pi Cam will help us in surveilling a room.
2. We’ll give user the option to select an area within that room, which shouldn’t be
compromised. So basically, we are geo-fencing that area within a room.
3. As soon as an activity is observed within that area, we will communicate to the mobile
application through MQTT Protocol.
4. Once the user is notified of the activity, the user will also be able to see the photos of the
security breach through Dropbox account.
