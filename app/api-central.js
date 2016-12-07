ApiCentral.$inject = ['PropertyFactory'];

export default function ApiCentral(PropertyFactory){
  return {
    'property:property_data' : function(){
			return PropertyFactory.property_data();
		}
  }
}
