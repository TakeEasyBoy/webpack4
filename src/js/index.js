import 'assets/css/iconfont.css'
import 'assets/css/custom.css'
import 'assets/sass/index.scss'

import 'assets/js/jquery.metisMenu.js'
import 'assets/js/dataTables/jquery.dataTables.js'
import 'assets/js/dataTables/dataTables.bootstrap.js'
import 'assets/js/customs/custom.js'
import axios from 'assets/js/utils.js'
axios.post('/user',{f:"test"})
     .then(res=>{
         console.log(res);
     })
