<template>
  <section
    :style="`height: ${height}`"
    class="scroll-container"
    :id="`realTime${id}`"
  ></section>
</template>

<script>
export default {
    name: 'portrait-push',
    props: {
        maxLength: {
            default: 15,
            type: Number
        },
        height: {
            default: '100%',
            type: String
        },
        itemHeight: {
            default: 130,
            type: Number
        },
        itemToTop: {
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
    data() {
        return {
            id: Math.random() + '',
            preClick: null
        };
    },
    beforeDestroy() {
        this.preClick = null;
    },
    methods: {
        appendItem(divStr, item) {
            let listDom = document.getElementById(`realTime${this.id}`);
            let length = listDom.children.length;
            if (length > this.maxLength) {
                listDom.lastElementChild.onclick = null;
                listDom.removeChild(listDom.lastElementChild);
            }
            Array.from(listDom.children).forEach((item, index) => {
                item.style.top = (index + 1) * (this.itemHeight + this.itemToTop) + 'px';
            });
            let tempDom = document.createElement('div');
            tempDom.innerHTML = divStr;
            tempDom.className = `scroll-container-item comeIn ${this.itemClass}`;
            tempDom.style.top = '0px';
            tempDom.onclick = () => this.itemClick(item, tempDom);
            listDom.prepend(tempDom);
        },
        itemClick(item, dom) {
            if (this.preClick) {
                this.preClick.className = `scroll-container-item ${this.itemClass}`;
            }
            dom.className = `scroll-container-item ${this.itemActiveClass}`;
            this.preClick = dom;
            this.$emit('click', item);
        },
        clear() {
            document.getElementById(`realTime${this.id}`).innerHTML = '';
        }
    }
};
</script>

<style lang="scss">
.scroll-container {
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 10px;
  position: relative;
  .comeIn {
    animation-name: comeIn;
    animation-delay: 0.5s;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    transform: translateX(-430px);
  }
  .comeInR {
    animation-name: comeInR;
    animation-delay: 0.5s;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    transform: translateX(430px);
  }
  &-item {
    width: 100%;
    position: absolute;
    top: 0px;
    transition: all 0.5s;
    color: green;
  }
}
@keyframes comeIn {
  0% {
    transform: translateX(-430px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes comeInR {
  0% {
    transform: translateX(430px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
