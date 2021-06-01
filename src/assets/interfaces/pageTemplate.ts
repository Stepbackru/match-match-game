interface PageTemplate {
  subscribe?: () => void;
  unsubscribe?: () => void;

  render(): void;
  destroy(): void;
}

export default PageTemplate;
