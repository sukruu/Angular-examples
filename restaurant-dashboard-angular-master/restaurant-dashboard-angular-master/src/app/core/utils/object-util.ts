export default class ObjectUtil {
    
    static isEmpty(obj: Record<string, any>): boolean {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }
      
}