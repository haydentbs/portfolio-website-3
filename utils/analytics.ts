// Function to track outbound link clicks
export const trackClick = (linkName: string, linkUrl: string, category: string) => {
  // Check if gtag is available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'click', {
      event_category: category,
      event_label: linkName,
      link_url: linkUrl,
      link_text: linkName
    });
  }
}; 