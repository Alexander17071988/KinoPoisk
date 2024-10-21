export interface UniversalCarouselProps<T> {
    data: T[];
    isLoading: boolean;
    renderItem: (item: T) => React.ReactNode;
}