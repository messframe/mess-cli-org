<template>
    <div class="demo-box">
        <div class="markdown">
            <slot name="description"></slot>
        </div>
        <div class="demo-box_component">
            <slot name="component"></slot>
        </div>
        <div :style="codeStyle"
             class="demo-box_code"
             ref="code">
            <slot name="code"></slot>
        </div>
        <div class="demo-box_btn"
             :class="{open}"
             @click="handleClick">
            <i class="lidaicon-h-angle-sm-down"></i>
            <span>{{open?'隐藏代码':'显示代码'}}</span>
        </div>
    </div>
</template>

<script>

    export default {
        name: "demo-box",
        data(){
            return {
                open: false,
                height: 0
            }
        },
        mounted(){
            this.height = this.$refs.code.children[0].clientHeight;
        },
        computed: {
            codeStyle(){
                return {
                    maxHeight: `${this.open?this.height:0}px`
                };
            }
        },
        methods: {
            handleClick(){
                this.open = !this.open;
            }
        }
    };
</script>
<style lang="scss">
.demo-box {
    color: #d3dce6;
    margin-bottom: 48px;
}
.demo-box_code {
    color: #d3dce6;
    border: 1px solid #eaeefb;
    border-bottom: none;
    border-top: none;
    max-height: 0;
    transition: max-height 300ms;
    overflow-y: hidden;
    overflow-x: auto;
    &>pre {
        padding: 32px;
        margin: 0;
        display: block;
        overflow-x: auto;
        font-size: 12px;
        line-height: 1.8;
        background: #fafafa;
        border-radius: 5px;
        -webkit-font-smoothing: auto;
        font-family: Menlo,Monaco,Consolas,Courier,monospace;
    }
}
.demo-box_component {
    color: #d3dce6;
    padding: 24px;
    border: 1px solid #eaeefb;
    border-bottom: none;
}
.demo-box_btn {
    height: 32px;
    border: 1px solid #eaeefb;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
    i {
        font-size: 24px;
        vertical-align: middle;
    }
    span {
        position: absolute;
        color: rgba(255, 255, 255,0);
    }
    span,i {
        display: inline-block;
        transition: 0.3s;
    }
    &:hover {
        span,i {
            color: #409eff;
            transform: translateX(-30px);
        }
    }
    &.open {
        i {
            transform: rotateX(180deg)
        }
        &:hover {
            i {
                transform: translateX(-30px) rotateX(180deg)
            }
        }
    }
}

</style>