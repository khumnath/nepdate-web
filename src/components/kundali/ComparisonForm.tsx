import React, { useRef } from 'react';
import { KundaliForm, type DefaultFormValues, type KundaliFormHandle } from './KundaliForm';
import type { KundaliRequest } from '../../../types/types';
import { NEPALI_LABELS } from '../../constants/constants';
import { LoaderIcon } from '../../data/icons';

interface ComparisonFormProps {
    onCalculate: (groomData: KundaliRequest, brideData: KundaliRequest) => void;
    isLoading: boolean;
}

// Default values for a 36/36 Guna Milan match
const defaultGroomValues: DefaultFormValues = {
    name: 'सुरज',
    dateSystem: 'BS',
    bsYear: 2050,
    bsMonth: 2, // Jestha
    bsDay: 2,
    hour: 10,
    minute: 15,
    second: 0,
    period: 'AM'
};

const defaultBrideValues: DefaultFormValues = {
    name: 'अम्रिता',
    dateSystem: 'BS',
    bsYear: 2053,
    bsMonth: 8, // Jestha
    bsDay: 9,
    hour: 2,
    minute: 30,
    second: 0,
    period: 'PM'
};


export const ComparisonForm: React.FC<ComparisonFormProps> = ({ onCalculate, isLoading }) => {
    const groomFormRef = useRef<KundaliFormHandle>(null);
    const brideFormRef = useRef<KundaliFormHandle>(null);

    const handleSubmit = async () => {
        const groomData = await groomFormRef.current?.validateAndGetData();
        const brideData = await brideFormRef.current?.validateAndGetData();

        if (groomData && brideData) {
            onCalculate(groomData, brideData);
        }
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl shadow-lg p-4 dark:bg-gray-800/50">
                    <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4 text-center">{NEPALI_LABELS.groomDetails}</h2>
                    <KundaliForm
                        ref={groomFormRef}
                        onCalculate={() => {}} // This is now handled by the parent
                        isLoading={false}
                        hideSubmitButton={true}
                        defaultValues={defaultGroomValues}
                    />
                </div>
                <div className="bg-slate-50 rounded-xl shadow-lg p-4 dark:bg-gray-800/50">
                    <h2 className="text-xl font-bold text-pink-700 dark:text-pink-400 mb-4 text-center">{NEPALI_LABELS.brideDetails}</h2>
                    <KundaliForm
                        ref={brideFormRef}
                        onCalculate={() => {}} // This is now handled by the parent
                        isLoading={false}
                        hideSubmitButton={true}
                        defaultValues={defaultBrideValues}
                    />
                </div>
            </div>

            <div className="pt-4">
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full flex justify-center items-center py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed dark:bg-green-600 dark:hover:bg-green-700 dark:disabled:bg-gray-500"
                >
                    {isLoading ? (
                        <>
                            <LoaderIcon className="w-5 h-5 mr-3 animate-spin" />
                            {NEPALI_LABELS.calculating}
                        </>
                    ) : (
                        NEPALI_LABELS.calculateComparison
                    )}
                </button>
            </div>
        </div>
    );
};
