namespace Tutor.Extentions
{
    public static class Helper
    {
        public static T Update<T, D>(this T old, D newEntity)
        {
            var newProps = newEntity.GetType().GetProperties();
            foreach (var newProp in newProps)
            {
                var data = newProp.GetValue(newEntity);
                var oldProp = old.GetType().GetProperty(newProp.Name);

                if (data != null && oldProp != null 
                    && (data.GetType() == oldProp.GetValue(old)?.GetType() || oldProp.GetValue(old) is null))
                {
                    try
                    {
                        oldProp.SetValue(old, data);
                    }
                    catch
                    {
                    }
                    
                }
            }

            return old;
        }
    }
}
