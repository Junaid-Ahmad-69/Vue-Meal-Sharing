<script setup>
import {notification} from 'ant-design-vue';
import {watch} from "vue";

const props = defineProps({
  toggle: {
    type: Boolean,
    required: true,
    default: false
  }
})

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    style: {
      width: '400px',
      marginLeft: `${335 - 600}px`,
    },
    class: 'notification-custom-class',
  });
};


watch(()=> props.toggle, (newVal)=>{
  if(newVal === true){
    openNotification();
  }
})

</script>

