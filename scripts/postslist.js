// postslist.js
document.addEventListener('DOMContentLoaded', function () {
  // Sample data for posts (Replace this with your actual data)
  const postsData = [
    {
      id: 1,
      user: 'Emily Smith',
      heading: 'The Art of Mindfulness',
      text: 'Discover the power of mindfulness in daily life. Learn how to be present in every moment, reduce stress, and find inner peace through simple yet effective practices. Mindfulness is the practice of bringing focused attention to the present moment without judgment. It allows us to fully experience life as it unfolds, rather than being lost in regrets about the past or worries about the future. By cultivating mindfulness, we can enhance our mental clarity, emotional balance, and overall well-being. One of the keys to mindfulness is to pay attention to our breath, as it serves as an anchor to the present moment. Breathing mindfully can help us calm our mind and body, allowing us to respond to situations with greater clarity and wisdom. Another important aspect of mindfulness is observing our thoughts and emotions without getting entangled in them. This non-reactive awareness enables us to step back from our habitual thought patterns and emotional reactions, creating space for more skillful responses to life\'s challenges. Mindfulness practices can include meditation, body scans, mindful eating, and walking meditation. It\'s a journey of self-discovery and self-compassion, as we learn to embrace our experiences with kindness and curiosity. As we become more mindful, we begin to notice the interconnectedness of all things and develop a greater sense of compassion for ourselves and others. Join me on this transformative journey of mindfulness, and let\'s cultivate a deeper sense of joy, peace, and fulfillment in our lives.'
    },    
    {
      id: 2,
      user: 'Michael Johnson',
      heading: 'Unleashing Your Creative Potential',
      text: 'Tap into your creativity and unlock endless possibilities. Explore various art forms, express yourself, and embrace the joy of creation. Creativity is an inherent aspect of being human, and each of us has a unique creative spark waiting to be expressed. Whether you\'re an artist, writer, musician, or someone who simply wants to infuse creativity into everyday life, there are countless ways to unleash your creative potential. The creative process often begins with curiosity and a willingness to explore the unknown. It\'s about giving yourself permission to experiment, take risks, and make mistakes without judgment. Creativity is not about achieving perfection; it\'s about embracing imperfection and seeing it as an opportunity for growth. Engaging in creative activities can provide a sense of flow, where time seems to dissolve, and you are fully immersed in the present moment. This state of flow allows ideas to flow freely and fosters a sense of joy and fulfillment. Embrace a playful attitude, and don\'t be afraid to think outside the box. Allow your imagination to soar and follow the sparks of inspiration wherever they may lead. Surround yourself with creative influences, be it nature, art, music, or the stories of inspiring individuals. Collaboration with others can also be a powerful way to ignite your creativity and bring fresh perspectives to your work. Remember, creativity is not limited to the arts; it can be found in problem-solving, innovation, and everyday tasks. Embrace the journey of discovery, and let your creative spirit shine!'
    },
    {
      id: 3,
      user: 'Sophia Lee',
      heading: 'Healthy Eating Habits for a Balanced Life',
      text: 'Nourish your body and mind with wholesome foods and balanced nutrition. Explore tasty recipes, meal planning tips, and the benefits of a healthy lifestyle. Nutrition plays a vital role in our overall health and well-being. It\'s not just about counting calories; it\'s about providing our bodies with the essential nutrients they need to function optimally. Healthy eating habits can lead to increased energy levels, improved digestion, better mood, and a reduced risk of chronic diseases. A balanced diet includes a variety of whole foods, such as fruits, vegetables, whole grains, lean proteins, and healthy fats. Fresh, colorful produce provides a rich array of vitamins, minerals, and antioxidants to support our immune system and cellular health. Lean proteins, like poultry, fish, beans, and legumes, are essential for muscle repair and growth. Healthy fats, found in avocados, nuts, seeds, and olive oil, are crucial for brain health and the absorption of fat-soluble vitamins. Hydration is equally important; drinking enough water helps regulate body temperature, aids digestion, and flushes out toxins. Meal planning can be a helpful tool in maintaining healthy eating habits. Plan ahead for balanced meals and snacks, ensuring that you have nutritious options readily available. Avoid skipping meals and aim for regular eating patterns to stabilize blood sugar levels and avoid overeating. Pay attention to portion sizes to avoid overindulgence and practice mindful eating by savoring each bite. Mindful eating involves listening to your body\'s hunger and fullness cues, as well as being aware of the tastes, textures, and aromas of your food. Adopting healthy eating habits is a journey that requires patience and self-compassion. Start by making small, sustainable changes and gradually build upon them. Let\'s embark on this path to nourish our bodies and minds, promoting a balanced and vibrant life.'
    },
    {
      id: 4,
      user: 'Daniel Williams',
      heading: 'The Thrill of Adventure Travel',
      text: 'Embark on thrilling adventures across the globe, from hiking majestic mountains to diving into crystal-clear waters. Let\'s ignite your wanderlust and experience the world\'s wonders. Adventure travel offers a unique opportunity to explore the beauty and diversity of our planet while challenging ourselves physically and mentally. It takes us beyond the comfort of our daily routines and opens the door to unforgettable experiences. Hiking through remote landscapes, we connect with nature and witness breathtaking vistas. The feeling of conquering a challenging trail and reaching a summit is unparalleled. Adventure travel is not just limited to land; diving into the depths of the ocean reveals a mesmerizing world of marine life and coral reefs. Snorkeling alongside sea turtles and colorful fish allows us to appreciate the wonders of the underwater realm. Exploring ancient ruins and historical sites takes us back in time, deepening our understanding of different cultures and civilizations. Adventure travel fosters a sense of wonder and curiosity as we immerse ourselves in unfamiliar environments. It pushes us out of our comfort zones and encourages personal growth and self-discovery. The camaraderie with fellow adventurers creates lasting memories and bonds forged through shared experiences. Respect for the environment and cultural sensitivity are essential in adventure travel. By treading lightly and supporting local communities, we can ensure that these incredible destinations remain preserved for future generations. Adventure travel reminds us of the resilience of the human spirit and our capacity to adapt and thrive in new situations. It nurtures a sense of gratitude for the world\'s natural beauty and cultural diversity. So, are you ready to embark on the journey of a lifetime? Let\'s seize the opportunity to explore, learn, and be inspired by the world around us.'
    },
    {
      id: 5,
      user: 'Olivia Turner',
      heading: 'Embracing Self-Care for Inner Wellbeing',
      text: 'Prioritize self-care to recharge your mind, body, and soul. Discover effective self-care practices, mindfulness exercises, and tips for maintaining a positive mindset. In our fast-paced and demanding lives, it\'s essential to carve out time for self-care and nourish our inner being. Self-care is not selfish; it\'s an act of self-love and a necessary foundation for overall well-being. It encompasses various practices that promote physical, emotional, and mental health. Practicing self-care doesn\'t have to be complicated; it can be as simple as taking a few deep breaths, going for a walk in nature, or enjoying a warm cup of tea. Self-care is about listening to our bodies and minds, honoring our needs, and setting healthy boundaries. Mindfulness is a powerful self-care tool that allows us to be fully present in the moment, free from judgment and distractions. Engaging in mindfulness exercises, such as meditation and yoga, can help reduce stress and increase feelings of calm and centeredness. Taking care of our physical health is equally important. Regular exercise, nutritious meals, and adequate rest contribute to a strong and resilient body. Embrace activities that bring you joy and make time for hobbies and creative pursuits. Self-care also involves nurturing our emotional well-being. Expressing emotions, whether through journaling or talking to a friend, can be therapeutic and healing. Surround yourself with a supportive network of people who uplift and encourage you. Practicing self-compassion and treating yourself with kindness is vital for cultivating a positive self-image. Learn to recognize and challenge negative self-talk, replacing it with empowering affirmations. As we prioritize self-care, we become better equipped to handle life\'s challenges and transitions. We develop resilience and a deeper connection to our authentic selves. Remember, self-care is not a luxury; it\'s an essential investment in your overall health and happiness. So, let\'s embark on this journey of self-discovery and embrace self-care as a way of life.'
    }
    
  ];

  const postsList = document.querySelector('.posts-list');

  // Function to create a single post card
  function createPostCard(post) {
    const card = document.createElement('div');
    card.classList.add('post-card');
    card.innerHTML = `
      <div class="post-user">
        <h4>${post.user}</h4>
      </div>
      <div class="post-content">
        <p class="post-heading">${post.heading} 
          <span class="delete-icon" title="Delete Post">&#128465;</span>
        </p>
        <p class="post-text">${post.text}</p>
        
      </div>
    `;

    // Check if the text is truncated (more than 3 lines)
  const postTextElement = card.querySelector('.post-text');
  if (postTextElement.scrollHeight > postTextElement.clientHeight) {
    postTextElement.classList.add('truncated');
  }

    return card;
  }

  // Function to create all post cards
  function createPosts() {
    postsData.forEach((post) => {
      const card = createPostCard(post);
      postsList.appendChild(card);
    });
  }

  createPosts();

  // Delete Post Modal
  const deleteModal = document.getElementById('delete-modal');
  const deleteButtons = document.querySelectorAll('.delete-icon');
  const backdrop = document.querySelector('.backdrop');


  function showModal() {
    deleteModal.style.display = 'block';
    backdrop.style.display = 'block';
  }

  function hideModal() {
    deleteModal.style.display = 'none';
    backdrop.style.display = 'none';
  }

  deleteButtons.forEach((button) => {
    button.addEventListener('click', showModal);
  });

  document.getElementById('no').addEventListener('click', hideModal);

  document.getElementById('yes').addEventListener('click', function () {
    // Delete post functionality here (to be implemented later)
    hideModal();
  });
});

