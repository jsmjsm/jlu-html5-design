<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Add the data</title>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <link rel="stylesheet" href="../bootstrap-3.3.7/dist/css/bootstrap.css">
</head>
<body>
<div id="app">
    <div class=" panel panel-primary">
        <div class="panel-heading">
            <h3 class="panel-title" v-fontweight="900" v-fontsize="50">地图标注</h3>
        </div>
        <div class="panel-body form-inline">
            <label for="">
                longitude:
                <input type="text" class="form-control" v-model="longitude">
            </label>
            <label for="">
                latitude:
                <input type="text" class="form-control" v-model="altitude" @keyup.f2="add">
            </label>
            <label for="">
                city:
                <input type="text" class="form-control" v-model="city" @keyup.enter="add">
            </label>
            <input type="button" class="btn btn-primary" value="添加" @click="add">
        </div>
        <div class="panel-body form-inline">
            <label for="">
                The keyword of city name:
                <input type="text" class="form-control" placeholder="Enter the keywords" v-model="word" v-focus v-color="'blue'">
            </label>
            <input type="button" class="btn btn-primary" value="查找" @click="find">
        </div>
    </div>
    <table class="table table-bordered table-striped">
        <thead>
        <tr>
            <th>longitude</th>
            <th>latitude</th>
            <th>city</th>
            <th>operation</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in search(keywords)" :key="item.city">
            <td>{{item.longitude}}</td>
            <td>{{item.altitude}}</td>
            <td>{{item.city}}</td>
            <td><a href="" @click.prevent="del(item.city)">delete</a></td>
        </tr>
        </tbody>
    </table>
</div>
<script>
    //自定义指令
    Vue.directive("focus",{
        bind:function (el) {
        },
        inserted:function (el) {
            el.focus()
        },
        updated:function (el) {
        }
    })
    Vue.directive("color",{
        bind:function (el,binding) {
            el.style.color = binding.value
        }
    })
    // 按键修饰符，自定义
    Vue.config.keyCodes.f2 = 113
    var vm = new Vue({
        el:'#app',
        data:{
            longitude:'',
            altitude:'',
            city:'',
            word:'',
            keywords:'',
            list:[
                {longitude:'N55.5',altitude:'E37.4' ,city:'莫斯科'},
                {longitude:'N52.3',altitude:'E13.3' ,city:'柏林'},
                {longitude:'N51.3' ,altitude:'E0.1' ,city:'伦敦'},
                {longitude:'N48.5' ,altitude:'E2.2' ,city:'巴黎'},
                {longitude:'N39.6' ,altitude:'E116.2' ,city:'北京'},
                {longitude:'N38.5' ,altitude:'W77.0' ,city:'华盛顿'}
            ]
        },
        methods:{
            add(){
                this.list.push({longitude:this.longitude,altitude:this.altitude,city:this.city})
                this.longitude = this.altitude = this.city = ''
            },
            find(){
              this.keywords = this.word
              this.word =  ''
            },
            del(cityname){
                var index = this.list.findIndex((item,i)=>{
                    if(item.city == cityname){
                        return true;
                    }
                })
                this.list.splice(index,1);
            },
            search(keyword){
                return this.list.filter(item =>{
                    if(item.city.includes(keyword)){
                        return item
                    }
                })
            }
        },
        filters:{

        },
        directives:{
            "fontweight":{
               bind:function (el,binding) {
                   el.style.fontWeight = binding.value
               }
            },
            // 这个function相当于把代码写进了bind和update中
            "fontsize":function (el,binding) {
                el.style.fontSize = parseInt(binding.value)+'px'
            }
        }
    })
</script>
</body>
</html>
