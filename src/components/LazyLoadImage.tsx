import React, { Component } from 'react';
import PropTypes from 'prop-types';


interface LazyLoadImageProps {
    src: string;
    alt: string;
    index:string
}
interface LazyLoadImageState {
    inViewPort: boolean
}

class LazyLoadImage extends Component<LazyLoadImageProps, LazyLoadImageState> {
    private imgRef: React.RefObject<HTMLImageElement>;
    private observer: IntersectionObserver | null;

    constructor(props: LazyLoadImageProps) {
        super(props)
        this.imgRef = React.createRef();
        this.observer = null;
        this.state = { inViewPort: false }
    }

    handleIntersection: IntersectionObserverCallback = (entries) => {
        console.log(this.props.index)
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('true')
                this.setState({ inViewPort: true });
                if (this.observer) {
                    this.observer.unobserve(entry.target);
                }
            }
        });
    };



    componentDidMount(): void {
        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: '20px',
            threshold: 0.1
        };
        this.observer = new IntersectionObserver(this.handleIntersection, options);
        if (this.imgRef.current) {
            this.observer.observe(this.imgRef.current);
        }
    }

    componentWillUnmount(): void { }

    render() {
        const { src, alt } = this.props;
        const { inViewPort } = this.state;
        return (
            <img
                ref={this.imgRef}
                src={inViewPort ? src : ''}
                alt={alt}
            />
        );
    }
}


export default LazyLoadImage;