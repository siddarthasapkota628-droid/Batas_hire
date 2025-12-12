import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getForm, submitForm } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface DynamicFormProps {
    formId: string;
    onSuccess?: () => void;
}

const DynamicForm = ({ formId, onSuccess }: DynamicFormProps) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

    // Fetch Form Definition
    const { data: formData, isLoading: isFormLoading, error: formError } = useQuery({
        queryKey: ['form', formId],
        queryFn: () => getForm(formId),
        enabled: !!formId,
    });

    // Form Submission Mutation
    const mutation = useMutation({
        mutationFn: (data: any) => submitForm(formId, data),
        onSuccess: () => {
            setIsSubmitted(true);
            reset();
            toast.success("Application submitted successfully!");
            if (onSuccess) {
                setTimeout(onSuccess, 2000); // Close modal after delay
            }
        },
        onError: (error) => {
            console.error("Submission error:", error);
            toast.error("Failed to submit application. Please try again.");
        }
    });

    const onSubmit = (data: any) => {
        mutation.mutate(data);
    };

    if (isFormLoading) {
        return (
            <div className="flex justify-center items-center py-10">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    if (formError || !formData) {
        return (
            <div className="text-center py-10 text-destructive">
                <AlertCircle className="w-12 h-12 mx-auto mb-2" />
                <p>Failed to load form. Please try again later.</p>
                <p className="text-xs text-muted-foreground mt-2">Error: {formError instanceof Error ? formError.message : "Unknown error"}</p>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="text-center py-10">
                <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{formData.confirmationTitle || "Thank You!"}</h3>
                <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: formData.confirmationMessage?.root?.children?.[0]?.children?.[0]?.text || "Your application has been received." }} />
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-6">
                    Submit Another Response
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Ensure fields exist */}
            {!formData.fields && <p>No fields found for this form.</p>}

            {formData.fields?.map((field: any) => {
                const { name, label, required, blockType, options } = field;
                const safeLabel = label || name || "Field";
                const placeholder = `Enter your ${safeLabel.toLowerCase()}`;

                // Handle different field types

                if (blockType === 'text' || blockType === 'email' || blockType === 'number' || blockType === 'phoneNumber') {
                    return (
                        <div key={name} className="space-y-2">
                            <Label htmlFor={name}>
                                {safeLabel} {required && <span className="text-destructive">*</span>}
                            </Label>
                            <Input
                                id={name}
                                type={blockType === 'phoneNumber' ? 'tel' : blockType}
                                placeholder={placeholder}
                                {...register(name, { required: required ? `${safeLabel} is required` : false })}
                            />
                            {errors[name] && <span className="text-destructive text-sm">{errors[name]?.message as string}</span>}
                        </div>
                    );
                }

                if (blockType === 'textarea') {
                    return (
                        <div key={name} className="space-y-2">
                            <Label htmlFor={name}>
                                {safeLabel} {required && <span className="text-destructive">*</span>}
                            </Label>
                            <Textarea
                                id={name}
                                placeholder={placeholder}
                                {...register(name, { required: required ? `${safeLabel} is required` : false })}
                            />
                            {errors[name] && <span className="text-destructive text-sm">{errors[name]?.message as string}</span>}
                        </div>
                    );
                }

                if (blockType === 'select') {
                    return (
                        <div key={name} className="space-y-2">
                            <Label htmlFor={name}>
                                {safeLabel} {required && <span className="text-destructive">*</span>}
                            </Label>
                            <Select onValueChange={(val) => setValue(name, val)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                                <SelectContent>
                                    {options?.map((opt: any) => (
                                        <SelectItem key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {/* Hidden input for validation since Select doesn't use ref */}
                            <input
                                type="hidden"
                                {...register(name, { required: required ? `${safeLabel} is required` : false })}
                            />
                            {errors[name] && <span className="text-destructive text-sm">{errors[name]?.message as string}</span>}
                        </div>
                    )
                }

                return null;
            })}

            <Button type="submit" className="w-full" disabled={mutation.isPending}>
                {mutation.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {formData.submitButtonLabel || "Submit Application"}
            </Button>
        </form>
    );
};

export default DynamicForm;
