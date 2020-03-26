<template>
    <section :style="`width: ${width}`" class="scroll-container-transverse" :id="`realTime${id}`">

    </section>
</template>

<script>
export default {
    name: 'transverse-push',
    props: {
        maxLength: {
            default: 15,
            type: Number
        },
        width: {
            default: '100%',
            type: String
        },
        itemWidth: {
            default: 130,
            type: Number
        },
        itemToLeft: {
            default: 10,
            type: Number
        },
        itemClass: {
            default: '',
            type: String
        },
        itemActiveClass: {
            default: '',
            type: String
        }
    },
    data () {
        return {
            id: Math.random() + '',
            preClick: null,
        };
    },
    beforeDestroy () {
        this.preClick = null;
    },
    methods: {
        appendItem (divStr, item) {
            let listDom = document.getElementById(`realTime${this.id}`);
            let length = listDom.children.length;
            if (length > this.maxLength) {
                listDom.lastElementChild.onclick = null;
                listDom.removeChild(listDom.lastElementChild);
            }
            Array.from(listDom.children).forEach((item, index) => {
                item.style.left = (index + 1) * (this.itemWidth + this.itemToLeft) + 'px';
            });
            let tempDom = document.createElement('div');
            tempDom.innerHTML = divStr;
            tempDom.className = `scroll-container-transverse-item comeInTransverseT ${this.itemClass}`;
            tempDom.style.left = '0px';
            tempDom.onclick = () => this.itemClick(item, tempDom);
            listDom.prepend(tempDom);
        },
        itemClick (item, dom) {
            if (this.preClick) {
                this.preClick.className = `scroll-container-transverse-item ${this.itemClass}`;
            }
            dom.className = `scroll-container-transverse-item ${this.itemActiveClass}`;
            this.preClick = dom;
            this.$emit('click', item);
        },
        clear () {
            document.getElementById(`realTime${this.id}`).innerHTML = '';
        }
    }
};
</script>

<style lang="scss">
.scroll-container-transverse {
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 10px;
    position: relative;
    height: 100%;
    .comeInTransverse {
        animation-name: comeInTransverse;
        animation-delay: .5s;
        animation-duration: .5s;
        animation-fill-mode: forwards;
        transform: translateY(-430px);
    }
    .comeInTransverseT {
        animation-name: comeIncomeInTransverseT;
        animation-delay: .5s;
        animation-duration: .5s;
        animation-fill-mode: forwards;
        transform: translateY(430px);
    }
    &-item {
        height: 100%;
        position: absolute;
        left: 0px;
        transition: all .5s;
        color: green;
    }
}
@keyframes comeInTransverse {
    0% {
        transform: translateY(-430px);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes comeIncomeInTransverseT {
    0% {
        transform: translateY(430px);
    }
    100% {
        transform: translateY(0);
    }
}
</style>