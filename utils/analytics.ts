// Function to track outbound link clicks with enhanced details
export const trackClick = (linkName: string, linkUrl: string, category: string) => {
  // Check if gtag is available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    // Get the current page path
    const currentPath = window.location.pathname;
    const timestamp = new Date().toISOString();

    (window as any).gtag('event', 'link_click', {
      // Basic link information
      event_category: category,
      event_label: linkName,
      link_url: linkUrl,
      link_text: linkName,

      // Additional context
      source_page: currentPath,
      timestamp: timestamp,
      
      // Custom dimensions for better filtering
      link_type: category.includes('profile') ? 'profile' : 
                 category.includes('github') ? 'repository' :
                 category.includes('demo') ? 'demo' :
                 category.includes('paper') || category.includes('cv') ? 'document' : 'other',
      
      // Interaction details
      interaction_type: 'click',
      content_type: linkUrl.endsWith('.pdf') ? 'pdf' : 
                   linkUrl.includes('github') ? 'github' :
                   linkUrl.includes('linkedin') ? 'linkedin' :
                   linkUrl.includes('kaggle') ? 'kaggle' : 'website'
    });
  }
}; 