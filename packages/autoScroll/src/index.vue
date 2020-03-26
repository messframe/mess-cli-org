<template>
    <div class="auto-scroll" ref="auto-scroll">
        <div ref="auto-scroll-old">
            <slot></slot>
        </div>
        <div ref="auto-scroll-copy">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'auto-scroll',
    props: {
        speed: {
            type: Number,
            default: 70
        },
        direction: {
            type: String,
            default: 'top'
        },
        hStop: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        start () {
            let old = this.$refs['auto-scroll-old'];
            let copy = this.$refs['auto-scroll-copy'];
            old.classList.add(`auto-scroll-${this.direction}`);
            copy.classList.add(`auto-scroll-${this.direction}`);
            let height = old.scrollHeight;
            let width = old.scrollWidth;
            let keyFrames = `
            @keyframes autoScroll_${this.direction} {
                0%{
                    ${this.direction === 'top' ? `transform: translateY(0px);` : ''}
                    ${this.direction === 'bottom' ? `transform: translateY(-${height}px);` : ''}
                    ${this.direction === 'left' ? `transform: translateX(0);` : ''}
                    ${this.direction === 'right' ? `transform: translateX(-${width}px);` : ''}
                }
                100%{
                    ${this.direction === 'top' ? `transform: translateY(-${height}px);` : ''}
                    ${this.direction === 'bottom' ? 'transform: translateY(0);' : ''}
                    ${this.direction === 'left' ? `transform: translateX(-${width}px);` : ''}
                    ${this.direction === 'right' ? 'transform: translateX(0);' : ''}
                    
                }
            }
            `;
            let during = (
                ((this.direction === 'top' || this.direction === 'bottom') ? height : width) / this.speed
            );
            document.styleSheets[0].insertRule(keyFrames);
            if (this.hStop) {
                this.$refs['auto-scroll'].classList.add('hStop-animation');
            }
            old.style = `animation: autoScroll_${this.direction} ${during}s linear;animation-iteration-count: infinite`;
            copy.style = `animation: autoScroll_${this.direction} ${during}s linear;animation-iteration-count: infinite`;
        }
    }
};
</script>

<style lang="scss" scoped>
.hStop-animation:hover {
    .auto-scroll-left, .auto-scroll-right, .auto-scroll-top, .auto-scroll-bottom {
        animation-play-state: paused !important;
    }
}
.auto-scroll {
    width: 100%;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    &-left, &-right {
        display: inline-block;
        width: auto;
        overflow: hidden;
        white-space: nowrap;
    }
    &-top, &-bottom {
        display: block
    }
}
</style>