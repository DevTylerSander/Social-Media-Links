// =======================================================================
// This is the configuration file for the profile page.
// You can edit the following information to customize your profile page.
// =======================================================================

const profileData = {
    // Background (can be a color, gradient, or image URL)
    // Examples:
    //   'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    //   'radial-gradient(circle, #ff6b6b, #4ecdc4)'
    //   '#667eea'
    //   'url(https://example.com/image.jpg)'
    background: 'radial-gradient(circle, #ff6b6b, #4ecdc4)',
    
    // Container theme: 'light' or 'dark'
    // Light theme: white/light container with dark text
    // Dark theme: dark container with light text
    theme: 'dark', // Options: 'light' or 'dark'
    
    // Container background image (optional)
    // Leave empty to use theme default background
    // Examples:
    //   'url(https://example.com/image.jpg)'
    //   'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))'
    //   'rgba(255, 255, 255, 0.95)'
     // Leave empty for default theme background
    containerImage: '',
    
    // Profile picture URL (leave empty to show placeholder)
    // You can use a URL to an image online or a local image path
    // Example: 'https://example.com/your-photo.jpg' or 'images/profile.jpg'
    profilePicture: 'https://cdn.pixabay.com/photo/2023/09/24/01/59/ai-generated-8272022_1280.jpg', 
    
    // Your name
    name: 'Jason',
    
    // Your bio/description
    bio: 'This is an example bio. You can edit this in the config.js file.',
    
    // Your social media links
    // Add as many links as you want
    links: [
        { title: 'Twitch', url: 'https://www.twitch.tv/CHANGE_THIS' },
        { title: 'TikTok', url: 'https://www.tiktok.com/CHANGE_THIS' },
        { title: 'YouTube', url: 'https://www.youtube.com/CHANGE_THIS' },
        { title: 'Discord', url: 'https://discord.gg/CHANGE_THIS' },
        // Add more links here...
        // { title: 'Website', url: 'https://yourwebsite.com' },
    ]
};
