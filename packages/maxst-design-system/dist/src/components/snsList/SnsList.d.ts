interface SnsListProps {
    data: {
        type: 'facebook' | 'instagram' | 'youtube' | 'blog' | 'medium';
        url: string;
    }[];
    className?: string;
}
declare const SnsList: ({ data, className }: SnsListProps) => JSX.Element;
export { SnsList };
