<template>
    <div class="demo-header">
        <div class="demo-header-left">
            mess-cli
        </div>
        <div class="demo-header-right">
            <div class="demo-header-right-item">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        0.0.1
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>0.0.1</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="demo-header-right-item" @click="openUrl()">
                <span>GitHub</span>
                <i class="el-icon-link"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'demo-header',
    methods: {
        openUrl (url) {
            window.open('https://github.com/messframe/mess-cli')
        }
    }
}
</script>

<style lang="scss">
.demo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 40px;
    &-left, &-right {
        height: 100%;
    }
    &-left{
        line-height: 70px;
        font-size: 25px;
    }
    &-right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        &-item {
            cursor: pointer;
            transition: color .3s;
            margin-left: 20px;
            &:hover {
                color: #409eff;
            }
            .el-dropdown-link {
                cursor: pointer;
                color: #409EFF;
            }
            .el-icon-arrow-down {
                font-size: 12px;
            }
        }
    }
}
</style>